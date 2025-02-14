'use client';

import * as React from 'react';

import { login } from './action';

import { ServerActionSubmitButton } from '@/components/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { InputError } from '@/components/ui/input-error';
import { Label } from '@/components/ui/label';
import { TriangleAlert } from 'lucide-react';

const LoginMain = () => {
    const [state, action, pending] = React.useActionState(login, null);

    return (
        <>
            <CardContent>
                {state?.error && state?.error.message && (
                    <Alert variant='destructive' className='mb-6'>
                        <TriangleAlert className='size-4' />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{state?.error.message}</AlertDescription>
                    </Alert>
                )}

                <form action={action} id='login-form' className='space-y-4 [&>fieldset]:space-y-1'>
                    <fieldset>
                        <Label htmlFor='email'>Email</Label>
                        <Input
                            id='email'
                            type='email'
                            name='email'
                            autoFocus
                            placeholder='m@example.com'
                            autoComplete='email'
                            aria-label='Email'
                        />
                        <InputError message={state?.error.email?.toString()} />
                    </fieldset>
                    <fieldset>
                        <Label htmlFor='password'>Password</Label>
                        <Input
                            id='password'
                            type='password'
                            name='password'
                            autoFocus
                            placeholder='********'
                            autoComplete='password'
                            aria-label='Password'
                        />
                        <InputError message={state?.error.password?.toString()} />
                    </fieldset>
                </form>
            </CardContent>

            <CardFooter>
                <ServerActionSubmitButton form='login-form' text='Login' disabled={pending} />
            </CardFooter>
        </>
    );
};

export { LoginMain };
