'use client';

import Link from 'next/link';

import { getAuthUser } from '@/lib/client-utils';

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export function ButtonNavigation() {
    const { data, isLoading } = getAuthUser();

    return (
        <div className='flex items-center gap-4' suppressHydrationWarning>
            {isLoading && (
                <>
                    <Skeleton className='h-9 w-24' />
                    <Skeleton className='h-9 w-24' />
                </>
            )}

            {!isLoading && typeof data === 'undefined' && (
                <div className='flex items-center gap-4'>
                    <Button asChild>
                        <Link href='/login'>Login</Link>
                    </Button>
                    <Button asChild>
                        <Link href='/register'>Register</Link>
                    </Button>
                </div>
            )}

            {!isLoading && typeof data !== 'undefined' && (
                <Button asChild>
                    <Link href='/dashboard'>Dashboard</Link>
                </Button>
            )}
        </div>
    );
}
