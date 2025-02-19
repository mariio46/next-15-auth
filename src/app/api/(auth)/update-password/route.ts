import type { UpdatePasswordErrorResponse, UpdatePasswordSuccessResponse } from '@/types/api/update-password';

import { axiosServer } from '@/lib/axios';
import { bearerToken, handleIfUnauthenticated } from '@/lib/server-utils';

export async function PATCH(request: Request) {
    const payload = await request.json();
    const token = await bearerToken();

    try {
        const { data } = await axiosServer.patch<UpdatePasswordSuccessResponse>('/api/auth/update-password', payload, {
            headers: {
                Authorization: token,
            },
        });

        return Response.json(data, { status: 200 });
    } catch (e) {
        const error = e as UpdatePasswordErrorResponse;

        if (error.status === 422 && error.response) {
            return Response.json(error.response.data, { status: 422 });
        }

        if (error.status === 401) {
            await handleIfUnauthenticated();

            return Response.json({ message: 'unauthenticated' }, { status: 401 });
        }

        return Response.json({ message: 'Something went wrong' }, { status: error.status });
    }
}
