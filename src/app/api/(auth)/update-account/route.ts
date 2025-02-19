import type { UpdateAccountErrorResponse, UpdateAccountSuccessResponse } from '@/types/api/update-account';

import { axiosServer } from '@/lib/axios';
import { bearerToken, handleIfUnauthenticated, setCredentialCookie } from '@/lib/server-utils';

export async function PATCH(request: Request) {
    const payload = await request.json();
    const token = await bearerToken();

    try {
        const { data } = await axiosServer.patch<UpdateAccountSuccessResponse>('/api/auth/update-account', payload, {
            headers: {
                Authorization: token,
            },
        });

        await setCredentialCookie(data.data.authorization.access_token);

        return Response.json({ message: data.message, data: { user: data.data.user } }, { status: 200 });
    } catch (e) {
        const error = e as UpdateAccountErrorResponse;

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
