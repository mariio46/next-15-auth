'use client';

import { useUpdatePasswordAction } from './action';

import { ClientActionSubmitButton } from '@/components/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

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
                    <ClientActionSubmitButton
                        disabled={form.formState.isSubmitting || !form.formState.isDirty}
                        visibility={form.formState.isSubmitting}
                    />
                </div>
            </form>
        </Form>
    );
};

export { UpdatePasswordForm };
