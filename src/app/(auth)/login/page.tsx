import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { LoginMain } from './main';

export default function LoginPage() {
    return (
        <div className='flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10'>
            <div className='w-full max-w-xl'>
                <Card>
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia libero culpa!
                            Inventore, aperiam suscipit.
                        </CardDescription>
                    </CardHeader>
                    <LoginMain />
                </Card>
            </div>
        </div>
    );
}
