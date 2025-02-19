import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import type { UpdatePasswordErrorResponse, UpdatePasswordSuccessResponse } from '@/types/api/update-password';

import { axiosClient } from '@/lib/axios';
import { redirectIfUnauthenticated } from '@/lib/client-utils';
import { toast } from 'sonner';
import { updatePasswordSchema, type UpdatePasswordFormFields } from './schema';

const useUpdatePasswordAction = () => {
    const { handleIfUnauthenticated } = redirectIfUnauthenticated();

    const form = useForm<UpdatePasswordFormFields>({
        resolver: zodResolver(updatePasswordSchema),
        defaultValues: {
            current_password: '',
            new_password: '',
            new_password_confirmation: '',
        },
    });

    async function submit(values: UpdatePasswordFormFields) {
        try {
            const { data } = await axiosClient.patch<UpdatePasswordSuccessResponse>('/api/update-password', values);

            form.reset();

            toast('Success', {
                description: data.message,
            });
        } catch (e) {
            const error = e as UpdatePasswordErrorResponse;

            if (error.status === 422 && error.response) {
                const { errors } = error.response.data;

                if (errors?.current_password) {
                    form.setError('current_password', { message: errors.current_password[0] });
                }

                if (errors?.new_password) {
                    form.setError('new_password', { message: errors.new_password[0] });
                }

                if (errors?.new_password_confirmation) {
                    form.setError('new_password_confirmation', { message: errors.new_password_confirmation[0] });
                }
            } else if (error.status === 401) {
                console.log('trigger 401');
                handleIfUnauthenticated();
            } else {
                console.error(error);
            }
        }
    }

    return { form, submit };
};

export { useUpdatePasswordAction };
