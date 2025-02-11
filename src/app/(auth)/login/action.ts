import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import type { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { axiosClient } from '@/lib/axios';
import { useSWRConfig } from 'swr';
import { loginSchema, type LoginFormFields } from './schema';

type ErrorResponse = AxiosError<{
    message: string;
    errors: {
        email?: string[];
        password?: string[];
    };
}>;

const useLoginAction = () => {
    const router = useRouter();

    const { mutate } = useSWRConfig();

    const form = useForm<LoginFormFields>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    async function submit(values: LoginFormFields) {
        try {
            const { data } = await axiosClient.post<{ message: string }>('/api/login', values);

            form.reset();

            toast('Success', {
                description: data.message,
                duration: 10000,
            });

            mutate('/api/auth-user');

            router.push('/dashboard');
        } catch (e) {
            const error = e as ErrorResponse;

            if (error.status === 422 && error.response) {
                const { errors } = error.response.data;

                if (errors.email) {
                    form.setError('email', { message: errors.email[0] });
                }

                if (errors.password) {
                    form.setError('password', { message: errors.password[0] });
                }
            } else {
                console.log({ 'Error On Client Action Catch': error });
            }
        }
    }

    return { form, submit };
};

type UseLoginActionReturn = ReturnType<typeof useLoginAction>;

export { useLoginAction, type UseLoginActionReturn };
