'use client';

import * as React from 'react';

import { getAuthUser } from '@/lib/client-utils';
import { useAuthUserStore } from '@/stores/auth-user-store';

const AuthUserProvider = ({ children }: { children: React.ReactNode }) => {
    const { data, isLoading, isValidating, error } = getAuthUser();
    const setAuth = useAuthUserStore((state) => state.setAuth);

    React.useEffect(() => {
        if (!data && !isLoading && !isValidating && !error) {
            setAuth({ user: undefined, status: 'unauthenticated' });
        }
    }, []);

    return children;
};

export { AuthUserProvider };
