import 'client-only';

import { getCookie } from 'cookies-next/client';
import useSWR from 'swr';

import type { AuthUser } from '@/types/api/auth';

import { fetcher } from './utils';

export function getAuthUser() {
    return useSWR<{ user: AuthUser }>('/api/auth-user', fetcher);
}

export function isLoggedIn(): boolean {
    return !!Number(getCookie('isLoggedIn') ?? 0);
}
