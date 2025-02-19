import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import type { UpdateAccountErrorResponse, UpdateAccountSuccessResponse } from '@/types/api/update-account';

import { axiosClient } from '@/lib/axios';
import { redirectIfUnauthenticated } from '@/lib/client-utils';
import { useAuthUserStore } from '@/stores/auth-user-store';
import type { ApiResponse } from '@/types/api';
import { updateAccountSchema, type UpdateAccountFormFields } from './schema';

const useUpdateAccountAction = () => {
    const queryClient = useQueryClient();

    const { handleIfUnauthenticated } = redirectIfUnauthenticated();

    const user = useAuthUserStore((state) => state.user);

    const form = useForm<UpdateAccountFormFields>({
        resolver: zodResolver(updateAccountSchema),
        defaultValues: {
            name: '',
            email: '',
        },
        values: {
            name: user?.name ?? '',
            email: user?.email ?? '',
        },
    });

    async function submit(values: UpdateAccountFormFields) {
        try {
            const { data } = await axiosClient.patch<
                ApiResponse<Omit<UpdateAccountSuccessResponse['data'], 'authorization'>>
            >('/api/update-account', values);

            form.reset({
                name: data.data.user.name,
                email: data.data.user.email,
            });

            queryClient.invalidateQueries({
                queryKey: ['auth-user'],
                exact: true,
            });

            toast('Success', {
                description: data.message,
            });
        } catch (e) {
            const error = e as UpdateAccountErrorResponse;

            if (error.status === 422 && error.response) {
                const { errors } = error.response.data;

                if (errors?.name) {
                    form.setError('name', { message: errors.name[0] });
                }

                if (errors?.email) {
                    form.setError('email', { message: errors.email[0] });
                }
            } else if (error.status === 401) {
                handleIfUnauthenticated();
            } else {
                console.error(error);
            }
        }
    }

    return { form, submit };
};

export { useUpdateAccountAction };
