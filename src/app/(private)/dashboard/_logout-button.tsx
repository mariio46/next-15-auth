'use client';

import { useLogoutAction } from '@/actions/client/logout';

import { Button } from '@/components/ui/button';
import { LucideReactIcon } from '@/components/ui/lucide-react-icon';

const LogoutButton = () => {
    const { handleLogout, loading } = useLogoutAction();

    return (
        <Button onClick={handleLogout} disabled={loading}>
            {loading && <LucideReactIcon name='Loader' className='animate-spin' />}
            {loading ? 'Processing...' : 'Logout'}
        </Button>
    );
};

export { LogoutButton };
