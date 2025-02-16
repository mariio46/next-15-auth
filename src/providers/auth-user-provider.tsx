'use client';

import * as React from 'react';

import { getAuthUser } from '@/lib/client-utils';
import { useAuthUserStore } from '@/stores/auth-user-store';

const AuthUserProvider = ({ children }: { children: React.ReactNode }) => {
    const { data, isLoading, isValidating, error } = getAuthUser();
    const { setUnauth } = useAuthUserStore();

    React.useEffect(() => {
        if (!data && !isLoading && !isValidating && !error) {
            setUnauth();
        }
    }, []);

    return children;
};

export { AuthUserProvider };
