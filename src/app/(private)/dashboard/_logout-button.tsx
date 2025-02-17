'use client';

import { Loader } from 'lucide-react';

import { useLogoutAction } from '@/actions/client/logout';

import { Button } from '@/components/ui/button';

const LogoutButton = () => {
    const { handleLogout, loading } = useLogoutAction();

    return (
        <Button onClick={handleLogout} disabled={loading}>
            {loading && <Loader className='animate-spin' />}
            {loading ? 'Processing...' : 'Logout'}
        </Button>
    );
};

export { LogoutButton };
