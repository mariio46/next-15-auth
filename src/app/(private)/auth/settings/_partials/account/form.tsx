'use client';

import { useUpdateAccountAction } from './action';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { LucideReactIcon } from '@/components/ui/lucide-react-icon';

const UpdateAccountForm = () => {
    const { form, isPending, submit } = useUpdateAccountAction();

    return (
        <Form {...form}>
            <form id='update-account-form' onSubmit={form.handleSubmit(submit)} className='space-y-4'>
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nama</FormLabel>
                            <FormControl>
                                <Input
                                    autoFocus
                                    type='text'
                                    autoComplete='name'
                                    aria-label='Name'
                                    placeholder='Your name'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    type='email'
                                    autoComplete='email'
                                    aria-label='Email'
                                    placeholder='johndoe@example.com'
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
                        form='update-account-form'
                        disabled={form.formState.isSubmitting || !form.formState.isDirty || isPending}>
                        {form.formState.isSubmitting && <LucideReactIcon name='Loader' className='animate-spin' />}
                        {form.formState.isSubmitting ? 'Processing...' : 'Save'}
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export { UpdateAccountForm };
