import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';

import type { AxiosError } from 'axios';

import { loginSchema } from '@/app/(auth)/login/schema';
import { axiosServer } from '@/lib/axios';

type ErrorResponse = AxiosError<{
    message: string;
    errors: {
        email?: string[];
        password?: string[];
    };
}>;

type SuccessResponse = {
    message: string;
    data: {
        access_token: string;
        token_type: string;
        expires_in: string;
    };
};

export async function POST(request: NextRequest) {
    const cookieStore = await cookies();

    const values = await request.json();

    const validatedFields = loginSchema.safeParse(values);

    if (!validatedFields.success) {
        return Response.json(
            { message: 'Validation Error.', errors: validatedFields.error.flatten().fieldErrors },
            { status: 422 },
        );
    }

    try {
        const response = await axiosServer.post<SuccessResponse>('/api/auth/login', validatedFields.data);

        const hostname = request.nextUrl.hostname;
        const expires = new Date(Date.now() + 18000000);

        cookieStore.set({
            name: 'isLoggedIn',
            value: '1',
            httpOnly: true,
            expires: expires,
            domain: hostname,
            path: '/',
            secure: true,
        });

        cookieStore.set({
            name: 'credential',
            value: response.data.data.access_token,
            httpOnly: true,
            expires: expires,
            domain: hostname,
            path: '/',
            secure: true,
        });

        return Response.json({ message: response.data.message }, { status: 200 });
    } catch (e) {
        console.log({ 'error on API Catch: ': e });
        const error = e as ErrorResponse;

        if (error.status === 422 && error.response) {
            const { errors } = error.response.data;

            return Response.json(
                { message: error.response.statusText, errors: errors },
                { status: 422, statusText: error.response.statusText },
            );
        } else {
            return Response.json({ message: error.message });
        }
    }
}
