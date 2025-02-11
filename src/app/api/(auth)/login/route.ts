import type { NextRequest } from 'next/server';

import type { AxiosError } from 'axios';

import { loginSchema } from '@/app/(auth)/login/schema';
import { setCredentialCookie, setIsLoggedInCookie } from '@/app/_lib/auth';
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
    const values = await request.json();

    const validatedFields = loginSchema.safeParse(values);

    if (!validatedFields.success) {
        return Response.json(
            { message: 'Validation Error.', errors: validatedFields.error.flatten().fieldErrors },
            { status: 422 },
        );
    }

    try {
        const { data } = await axiosServer.post<SuccessResponse>('/api/auth/login', validatedFields.data);

        await setIsLoggedInCookie('1');
        await setCredentialCookie(data.data.access_token);

        return Response.json({ message: data.message }, { status: 200 });
    } catch (e) {
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
