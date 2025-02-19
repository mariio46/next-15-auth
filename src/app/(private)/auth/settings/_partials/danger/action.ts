import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import type { DeleteAccountErrorResponse, DeleteAccountSuccessResponse } from '@/types/api/delete-account';

import { axiosClient } from '@/lib/axios';
import { redirectIfUnauthenticated } from '@/lib/client-utils';
import { useAuthUserStore } from '@/stores/auth-user-store';
import { deleteAccountSchema, type DeleteAccountFormFields } from './schema';

const useDeleteAccountAction = (closeDialog: VoidFunction) => {
    const router = useRouter();

    const { handleIfUnauthenticated } = redirectIfUnauthenticated();
    const setAuth = useAuthUserStore((state) => state.setAuth);
    const queryClient = useQueryClient();

    const form = useForm<DeleteAccountFormFields>({
        resolver: zodResolver(deleteAccountSchema),
        defaultValues: {
            password: '',
        },
    });

    async function submit(values: DeleteAccountFormFields) {
        const toastId = toast('Processing...', {
            description: 'Please wait, we are processing your request.',
            duration: Infinity,
        });

        try {
            const { data } = await axiosClient.post<DeleteAccountSuccessResponse>('/api/delete-account', values);

            toast('Success 🎉', {
                id: toastId,
                description: `${data.message} Goodbye👋`,
                duration: 10000,
            });

            setAuth({ user: undefined, status: 'unauthenticated' });

            queryClient.removeQueries({
                queryKey: ['auth-user'],
                exact: true,
            });

            closeDialog();

            router.refresh();
        } catch (e) {
            const error = e as DeleteAccountErrorResponse;

            if (error.status === 422 && error.response) {
                const { errors } = error.response.data;

                if (errors?.password) {
                    form.setError('password', { message: errors.password[0] });
                }

                toast('Failed', {
                    id: toastId,
                    description: 'There is an error on your form when submitting data!',
                    duration: 10000,
                });
            } else if (error.status === 401) {
                closeDialog();

                toast('Failed', {
                    id: toastId,
                    description: 'Cannot proceed your request, because you already logout!',
                    duration: 10000,
                });

                setTimeout(() => handleIfUnauthenticated(), 1500);
            } else {
                closeDialog();
                toast('Failed', {
                    id: toastId,
                    description: 'Unexpected error occurred, Please try again later.',
                    duration: 10000,
                });
            }
        }
    }

    return { form, submit };
};

export { useDeleteAccountAction };
