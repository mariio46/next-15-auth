'use server';

import { redirect } from 'next/navigation';

import type { AxiosError } from 'axios';

import { axiosServer } from '@/lib/axios';
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

export async function login(prevState: unknown, formData: FormData) {
    const values = Object.fromEntries(formData.entries());

    const validatedFields = loginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: validatedFields.error.flatten().fieldErrors } as { error: ErrorResponse };
    }

    const { email, password } = validatedFields.data;

    try {
        const { data } = await axiosServer.post<SuccessResponse>('/api/auth/login', { email, password });

        console.log(data);
    } catch (e) {
        const error = e as AxiosError<ErrorResponse>;

        if (error.status === 401 && error.response) {
            const errors = error.response.data;

            return { error: errors };
        }

        return { error: { message: 'Server is busy!' } } as { error: ErrorResponse };
    }

    redirect('/dashboard');
}
