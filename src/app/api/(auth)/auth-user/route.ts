import type { AxiosError } from 'axios';

import { getAuthUser } from '@/app/_lib/auth';
import { bearerToken } from '@/lib/server-utils';

export async function GET() {
    const token = await bearerToken();

    try {
        const { data } = await getAuthUser(token);

        return Response.json(data, { status: 200 });
    } catch (e) {
        const error = e as AxiosError;

        if (error.status === 401) {
            return Response.json({ message: 'unauthenticated' }, { status: 401 });
        }

        return Response.json({ message: 'Something went wrong' }, { status: error.status });
    }
}
