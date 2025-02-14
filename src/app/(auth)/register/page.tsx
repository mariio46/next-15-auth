import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RegisterForm } from './form';

export default function RegisterPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia libero culpa! Inventore,
                    aperiam suscipit.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <RegisterForm />
            </CardContent>
        </Card>
    );
}
