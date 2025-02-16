'use server';

import { redirect } from 'next/navigation';

import type { AxiosError } from 'axios';

import { axiosServer } from '@/lib/axios';
import { setCredentialCookie, setIsLoggedInCookie } from '@/lib/server-utils';
import { registerSchema } from './schema';

type ErrorResponse = {
    name?: string[];
    email?: string[];
    password?: string[];
    password_confirmation?: string[];
    message?: string;
};

type SuccessResponse = {
    message: string;
    data: {
        access_token: string;
        token_type: string;
        expires_in: string;
    };
};

export async function register(_: unknown, formData: FormData) {
    const values = Object.fromEntries(formData.entries());

    const validatedFields = registerSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: validatedFields.error.flatten().fieldErrors } as { error: ErrorResponse };
    }

    try {
        const { data } = await axiosServer.post<SuccessResponse>('/api/auth/register', validatedFields.data);

        await Promise.all([setIsLoggedInCookie('1'), setCredentialCookie(data.data.access_token)]);
    } catch (e) {
        const error = e as AxiosError<{ errors: ErrorResponse }>;

        if (error.status === 422 && error.response) {
            const { errors } = error.response.data;

            return {
                error: {
                    name: errors.name?.shift(),
                    email: errors.email?.shift(),
                    password: errors.password?.shift(),
                    password_confirmation: errors.password_confirmation?.shift(),
                    message: '',
                },
            } as { error: ErrorResponse };
        }

        return { error: { message: 'Server is busy!' } } as { error: ErrorResponse };
    }

    redirect('/dashboard');
}
