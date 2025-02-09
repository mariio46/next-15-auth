'use client';

import { Loader } from 'lucide-react';

import { useLoginAction } from './action';

import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';

import { LoginForm } from './form';

const LoginMain = () => {
    const { form, submit } = useLoginAction();

    return (
        <>
            <CardContent>
                <LoginForm action={{ form, submit }} />
            </CardContent>
            <CardFooter>
                <Button form='login-form' className='w-full' type='submit' disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting && <Loader className='animate-spin' />}
                    {form.formState.isSubmitting ? 'Processing...' : 'Login'}
                </Button>
            </CardFooter>
        </>
    );
};

export { LoginMain };
