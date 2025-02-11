import 'server-only';

import type { AuthUser } from '@/types/api/auth';

import { axiosServer } from '@/lib/axios';

export async function getAuthUser(token: string) {
    return await axiosServer.get<{ user: AuthUser }>('/api/auth/user', {
        headers: {
            Authorization: token,
        },
    });
}
