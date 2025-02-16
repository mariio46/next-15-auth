/* eslint-disable */

import 'client-only';

import type { AxiosError } from 'axios';
import { getCookie } from 'cookies-next/client';
import useSWR from 'swr';

import type { AuthUser } from '@/types/api/auth';

import { useAuthUserStore } from '@/stores/auth-user-store';
import { fetcher } from './utils';

export function getAuthUser() {
    const setAuth = useAuthUserStore((state) => state.setAuth);

    return useSWR<{ user: AuthUser }, AxiosError>(isLoggedIn() ? '/api/auth-user' : null, fetcher, {
        onSuccess: (data) => {
            setAuth({ user: data.user, status: 'authenticated' });
        },
        onError: (e) => {
            if (e.status === 401) {
                setAuth({ user: undefined, status: 'unauthenticated' });
            }
        },
    });
}

export function isLoggedIn(): boolean {
    return !!Number(getCookie('isLoggedIn') ?? 0);
}
