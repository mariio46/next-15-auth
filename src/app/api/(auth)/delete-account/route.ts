import type { DeleteAccountErrorResponse, DeleteAccountSuccessResponse } from '@/types/api/delete-account';

import { axiosServer } from '@/lib/axios';
import { bearerToken, handleIfUnauthenticated } from '@/lib/server-utils';

export async function POST(request: Request) {
    const payload = await request.json();
    const token = await bearerToken();

    try {
        const { data } = await axiosServer.post<DeleteAccountSuccessResponse>('/api/auth/delete-account', payload, {
            headers: {
                Authorization: token,
            },
        });

        await handleIfUnauthenticated();

        return Response.json(data, { status: 200 });
    } catch (e) {
        const error = e as DeleteAccountErrorResponse;

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
