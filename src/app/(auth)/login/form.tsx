'use client';

import * as React from 'react';

import Form from 'next/form';

import { TriangleAlert } from 'lucide-react';

import { login } from './action';

import { ServerActionSubmitButton } from '@/components/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { InputError } from '@/components/ui/input-error';
import { Label } from '@/components/ui/label';

const LoginForm = () => {
    const [state, action] = React.useActionState(login, null);

    return (
        <>
            {state?.error && state?.error.message && (
                <Alert variant='destructive' className='mb-6'>
                    <TriangleAlert className='size-4' />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{state?.error.message}</AlertDescription>
                </Alert>
            )}

            <Form
                action={action}
                className='[&>[data-slot=form-field]]:mb-4 [&>[data-slot=form-submit]]:mt-6 [&>fieldset]:space-y-1'>
                <fieldset data-slot='form-field'>
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

                <fieldset data-slot='form-field'>
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

                <div data-slot='form-submit'>
                    <ServerActionSubmitButton text='Login' />
                </div>
            </Form>
        </>
    );
};

export { LoginForm };
