import 'server-only';

import { cookies } from 'next/headers';

import type { AuthUser } from '@/types/api/auth';

import { axiosServer } from '@/lib/axios';
import { bearerToken } from '@/lib/server-utils';
import { getCurrentHostname } from '@/lib/utils';

export async function getAuthUser() {
    const token = await bearerToken();

    return await axiosServer.get<{ data: { user: AuthUser } }>('/api/auth/user', {
        headers: {
            Authorization: token,
        },
    });
}

const cookieExpires = new Date(Date.now() + 18000000);

export async function setIsLoggedInCookie(value: string) {
    const cookieStore = await cookies();

    cookieStore.set({
        name: 'isLoggedIn',
        value: value,
        httpOnly: false,
        expires: cookieExpires,
        domain: getCurrentHostname(),
        path: '/',
        secure: true,
        sameSite: 'lax',
    });
}

export async function setCredentialCookie(value: string) {
    const cookieStore = await cookies();

    cookieStore.set({
        name: 'credential',
        value: value,
        httpOnly: true,
        expires: cookieExpires,
        domain: getCurrentHostname(),
        path: '/',
        secure: true,
        sameSite: 'lax',
    });
}
