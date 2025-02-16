/* eslint-disable */

import 'client-only';

import type { AxiosError } from 'axios';
import { getCookie } from 'cookies-next/client';
import useSWR from 'swr';

import type { AuthUser } from '@/types/api/auth';

import { useAuthUserStore } from '@/stores/auth-user-store';
import { fetcher } from './utils';

export function getAuthUser() {
    const { setAuth, clearAuth } = useAuthUserStore();

    return useSWR<{ user: AuthUser }, AxiosError>(isLoggedIn() ? '/api/auth-user' : null, fetcher, {
        onSuccess: (data) => {
            setAuth(data.user);
        },
        onError: (e) => {
            if (e.status === 401) {
                clearAuth();
            }
        },
    });
}

export function isLoggedIn(): boolean {
    return !!Number(getCookie('isLoggedIn') ?? 0);
}
