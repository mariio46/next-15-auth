'use client';

import { useAuthUserStore } from '@/stores/auth-user-store';

const AuthUser = () => {
    const user = useAuthUserStore((state) => state.user);

    if (!user) {
        return <div />;
    }

    return (
        <div>
            <pre className='mt-2 w-min rounded-md bg-black p-4'>
                <code className='text-white'>{JSON.stringify(user, null, 2)}</code>
            </pre>
        </div>
    );
};

export { AuthUser };
