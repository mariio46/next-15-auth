import type { UseLoginActionReturn } from './action';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface LoginFormProps {
    action: UseLoginActionReturn;
}

const LoginForm = ({ action }: LoginFormProps) => {
    const { form, submit } = action;

    return (
        <Form {...form}>
            <form id='login-form' onSubmit={form.handleSubmit(submit)} className='space-y-4'>
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    autoFocus
                                    placeholder='Masukkan email anda'
                                    autoComplete='email'
                                    type='text'
                                    aria-label='Email'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='********'
                                    autoComplete='current-password'
                                    aria-label='Password'
                                    type='password'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
};

export { LoginForm };
