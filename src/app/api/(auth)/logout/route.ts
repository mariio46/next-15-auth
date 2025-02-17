import type { AxiosError } from 'axios';

import { axiosServer } from '@/lib/axios';
import { bearerToken, handleIfUnauthenticated } from '@/lib/server-utils';

export async function DELETE() {
    const token = await bearerToken();

    try {
        const { data } = await axiosServer.delete<{ message: string }>('/api/auth/logout', {
            headers: {
                Authorization: token,
            },
        });

        return Response.json(data, { status: 200 });
    } catch (e) {
        const error = e as AxiosError;

        if (error.status === 401) {
            return Response.json({ message: 'unauthenticated' }, { status: 401 });
        }

        return Response.json({ message: 'Something went wrong' }, { status: error.status });
    } finally {
        await handleIfUnauthenticated();
    }
}
