'use client';

import * as React from 'react';

import { register } from './action';

import { ServerActionSubmitButton } from '@/components/button';
import { Form, FormAction, FormField } from '@/components/form';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { InputError } from '@/components/ui/input-error';
import { Label } from '@/components/ui/label';
import { LucideReactIcon } from '@/components/ui/lucide-react-icon';

const RegisterForm = () => {
    const [state, action] = React.useActionState(register, null);

    return (
        <>
            {state?.error && state?.error.message && (
                <Alert variant='destructive' className='mb-6'>
                    <LucideReactIcon name='TriangleAlert' className='size-4' />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{state?.error.message}</AlertDescription>
                </Alert>
            )}

            <Form action={action}>
                <FormField>
                    <Label htmlFor='name'>Name</Label>
                    <Input
                        id='name'
                        type='text'
                        name='name'
                        placeholder='John Doe'
                        autoComplete='name'
                        aria-label='Name'
                        autoFocus
                    />
                    <InputError message={state?.error.name?.toString()} />
                </FormField>

                <FormField>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                        id='email'
                        type='email'
                        name='email'
                        placeholder='m@example.com'
                        autoComplete='email'
                        aria-label='Email'
                    />
                    <InputError message={state?.error.email?.toString()} />
                </FormField>

                <FormField>
                    <Label htmlFor='password'>Password</Label>
                    <Input
                        id='password'
                        type='password'
                        name='password'
                        placeholder='********'
                        autoComplete='password'
                        aria-label='Password'
                    />
                    <InputError message={state?.error.password?.toString()} />
                </FormField>

                <FormField>
                    <Label htmlFor='password_confirmation'>Confirm Password</Label>
                    <Input
                        id='password_confirmation'
                        type='password'
                        name='password_confirmation'
                        placeholder='********'
                        autoComplete='password-confirmation'
                        aria-label='Password Confirmation'
                    />
                    <InputError message={state?.error.password?.toString()} />
                </FormField>

                <FormAction>
                    <ServerActionSubmitButton text='Register' />
                </FormAction>
            </Form>
        </>
    );
};

export { RegisterForm };
