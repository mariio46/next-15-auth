'use client';

import { useUpdatePasswordAction } from './action';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { LucideReactIcon } from '@/components/ui/lucide-react-icon';

const UpdatePasswordForm = () => {
    const { form, submit } = useUpdatePasswordAction();

    return (
        <Form {...form}>
            <form id='update-password-form' onSubmit={form.handleSubmit(submit)} className='space-y-4'>
                <FormField
                    control={form.control}
                    name='current_password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Current Password</FormLabel>
                            <FormControl>
                                <Input
                                    type='password'
                                    autoComplete='current password'
                                    aria-label='Current Password'
                                    placeholder='********'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='new_password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>New Password</FormLabel>
                            <FormControl>
                                <Input
                                    type='password'
                                    autoComplete='new password'
                                    aria-label='New Password'
                                    placeholder='********'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='new_password_confirmation'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm New Password</FormLabel>
                            <FormControl>
                                <Input
                                    type='password'
                                    autoComplete='confirm new password'
                                    aria-label='Confirm new Password'
                                    placeholder='********'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div>
                    <Button
                        type='submit'
                        form='update-password-form'
                        disabled={form.formState.isSubmitting || !form.formState.isDirty}>
                        {form.formState.isSubmitting && <LucideReactIcon name='Loader' className='animate-spin' />}
                        {form.formState.isSubmitting ? 'Processing...' : 'Save'}
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export { UpdatePasswordForm };
