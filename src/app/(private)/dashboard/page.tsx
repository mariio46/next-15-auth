import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function DashboardPage() {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <Button asChild>
                <Link href='/'>Home</Link>
            </Button>
        </div>
    );
}
