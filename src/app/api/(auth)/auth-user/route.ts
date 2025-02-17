import type { AxiosError } from 'axios';

import { getAuthUser, handleIfUnauthenticated } from '@/lib/server-utils';

export async function GET() {
    try {
        const { data } = await getAuthUser();

        return Response.json(data.data, { status: 200 });
    } catch (e) {
        const error = e as AxiosError;

        if (error.status === 401) {
            await handleIfUnauthenticated();

            return Response.json({ message: 'unauthenticated' }, { status: 401 });
        }

        return Response.json({ message: 'Something went wrong' }, { status: error.status });
    }
}
