import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import type { ApiResponse } from '@/types/api';
import type { UpdateAccountErrorResponse, UpdateAccountSuccessResponse } from '@/types/api/update-account';

import { axiosClient } from '@/lib/axios';
import { redirectIfUnauthenticated } from '@/lib/client-utils';
import { useAuthUserStore } from '@/stores/auth-user-store';
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

    const { mutateAsync, isPending } = useMutation<
        ApiResponse<Omit<UpdateAccountSuccessResponse['data'], 'authorization'>>,
        UpdateAccountErrorResponse,
        UpdateAccountFormFields
    >({
        mutationKey: ['update-auth-user-account'],
        mutationFn: (values) => axiosClient.patch('/api/update-account', values),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['auth-user'],
                exact: true,
            });
        },
    });

    async function submit(values: UpdateAccountFormFields) {
        try {
            const { data } = await mutateAsync(values);

            form.reset({
                name: data.user.name,
                email: data.user.email,
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

    return { form, submit, isPending };
};

export { useUpdateAccountAction };
