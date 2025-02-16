import Link from 'next/link';

import { AuthUser } from '@/app/(general)/(home)/_user';
import { Button } from '@/components/ui/button';

import { LogoutButton } from './_logout-button';

export default function DashboardPage() {
    return (
        <div className='space-y-6'>
            <h1>Dashboard Page</h1>
            <div className='flex items-center gap-5'>
                <Button asChild>
                    <Link href='/'>Home</Link>
                </Button>
                <LogoutButton />
            </div>
            <AuthUser />
        </div>
    );
}
