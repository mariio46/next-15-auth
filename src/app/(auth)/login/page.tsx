import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { LoginMain } from './main';

export default function LoginPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia libero culpa! Inventore,
                    aperiam suscipit.
                </CardDescription>
            </CardHeader>
            <LoginMain />
        </Card>
    );
}
