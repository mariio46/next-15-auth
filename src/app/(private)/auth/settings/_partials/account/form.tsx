'use client';

import { useUpdateAccountAction } from './action';

import { ClientActionSubmitButton } from '@/components/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const UpdateAccountForm = () => {
    const { form, submit } = useUpdateAccountAction();

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
                    <ClientActionSubmitButton
                        visibility={form.formState.isSubmitting}
                        disabled={form.formState.isSubmitting || !form.formState.isDirty}
                    />
                </div>
            </form>
        </Form>
    );
};

export { UpdateAccountForm };
