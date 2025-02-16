'use client';

import * as React from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { Loader } from 'lucide-react';

import { logout } from '@/lib/server-actions';
import { useAuthUserStore } from '@/stores/auth-user-store';

import { Button } from '@/components/ui/button';

const LogoutButton = () => {
    const [loading, setLoading] = React.useState(false);

    const queryClient = useQueryClient();

    const setAuth = useAuthUserStore((state) => state.setAuth);

    function handleLogout() {
        setLoading((prevState) => !prevState);
        logout();
        setAuth({ user: undefined, status: 'unauthenticated' });
        queryClient.removeQueries({
            queryKey: ['auth-user'],
        });
    }

    return (
        <Button onClick={handleLogout} disabled={loading}>
            {loading && <Loader className='animate-spin' />}
            {loading ? 'Processing...' : 'Logout'}
        </Button>
    );
};

export { LogoutButton };
