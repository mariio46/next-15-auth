import { useDeleteAccountAction } from './action';

import { ClientActionSubmitButton } from '@/components/button';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface DeleteAccountFormProps {
    closeDialog: VoidFunction;
}

const DeleteAccountForm = ({ closeDialog }: DeleteAccountFormProps) => {
    const { form, submit } = useDeleteAccountAction(closeDialog);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)} className='space-y-4'>
                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='********'
                                    type='password'
                                    autoComplete='current-password'
                                    aria-label='Current Password'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className='flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'>
                    <Button tabIndex={-1} variant='outline' type='button' onClick={closeDialog}>
                        Cancel
                    </Button>
                    <ClientActionSubmitButton
                        variant='destructive'
                        visibility={form.formState.isSubmitting}
                        disabled={form.formState.isSubmitting || !form.formState.isDirty}
                    />
                </div>
            </form>
        </Form>
    );
};

export { DeleteAccountForm };
