'use client';

import { getAuthUser } from '@/lib/client-utils';

const AuthUser = () => {
    const { data, isLoading } = getAuthUser();

    return (
        <div>
            {!isLoading && data && (
                <pre className='mt-2 w-min rounded-md bg-black p-4'>
                    <code className='text-white'>{JSON.stringify(data.user, null, 2)}</code>
                </pre>
            )}
        </div>
    );
};

export { AuthUser };
