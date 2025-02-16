'use client';

import Link from 'next/link';

import { useAuthUserStore } from '@/stores/auth-user-store';

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export function ButtonNavigation() {
    const { status } = useAuthUserStore();

    console.log(status);

    return (
        <div className='flex items-center gap-4' suppressHydrationWarning>
            {status === 'pending' && (
                <>
                    <Skeleton className='h-9 w-24' />
                    <Skeleton className='h-9 w-24' />
                </>
            )}

            {status === 'unauthenticated' && (
                <div className='flex items-center gap-4'>
                    <Button asChild>
                        <Link href='/login'>Login</Link>
                    </Button>
                    <Button asChild>
                        <Link href='/register'>Register</Link>
                    </Button>
                </div>
            )}

            {status === 'authenticated' && (
                <Button asChild>
                    <Link href='/dashboard'>Dashboard</Link>
                </Button>
            )}
        </div>
    );
}
