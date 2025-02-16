import type { AxiosError } from 'axios';

import { getAuthUser } from '@/app/_lib/auth';

export async function GET() {
    try {
        const { data } = await getAuthUser();

        return Response.json(data.data, { status: 200 });
    } catch (e) {
        const error = e as AxiosError;

        if (error.status === 401) {
            return Response.json({ message: 'unauthenticated' }, { status: 401 });
        }

        return Response.json({ message: 'Something went wrong' }, { status: error.status });
    }
}
