'use server';

import { redirect } from 'next/navigation';

import type { AxiosError } from 'axios';

import { axiosServer } from '@/lib/axios';
import { setCredentialCookie, setIsLoggedInCookie } from '@/lib/server-utils';
import { loginSchema } from './schema';

type ErrorResponse = {
    email?: string[];
    password?: string[];
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

export async function login(_: unknown, formData: FormData) {
    const values = Object.fromEntries(formData.entries());

    const validatedFields = loginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: validatedFields.error.flatten().fieldErrors } as { error: ErrorResponse };
    }

    const { email, password } = validatedFields.data;

    try {
        const { data } = await axiosServer.post<SuccessResponse>('/api/auth/login', { email, password });

        await Promise.all([setIsLoggedInCookie('1'), setCredentialCookie(data.data.access_token)]);
    } catch (e) {
        const error = e as AxiosError<{ errors: ErrorResponse }>;

        if (error.status === 422 && error.response) {
            const errors = error.response.data;

            return {
                error: { email: errors.errors.email?.[0], password: errors.errors.password?.[0], message: undefined },
            } as { error: ErrorResponse };
        }

        return { error: { message: 'Server is busy!' } } as { error: ErrorResponse };
    }

    redirect('/dashboard');
}
