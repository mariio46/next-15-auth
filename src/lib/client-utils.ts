import 'client-only';

import { useQueryClient } from '@tanstack/react-query';

import { useAuthUserStore } from '@/stores/auth-user-store';

import { getCookie } from 'cookies-next/client';

export function isLoggedIn(): boolean {
    return !!Number(getCookie('isLoggedIn') ?? 0);
}

/* eslint react-hooks/rules-of-hooks: 0 */
export function redirectIfUnauthenticated() {
    const setAuth = useAuthUserStore((state) => state.setAuth);
    const queryClient = useQueryClient();

    function handleIfUnauthenticated() {
        queryClient.invalidateQueries({
            queryKey: ['auth-user'],
            exact: true,
        });

        setAuth({ user: undefined, status: 'unauthenticated' });

        window.location.reload();
    }
    return { handleIfUnauthenticated };
}
