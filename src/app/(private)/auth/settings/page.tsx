import { Header, HeaderSubTitle, HeaderTitle } from '@/components/header';

import { Button } from '@/components/ui/button';
import { UpdateAccountForm } from './_partials/account/form';
import { DeleteAccountDialog } from './_partials/danger/dialog';
import { UpdatePasswordForm } from './_partials/security/form';
import { ThemeSelectionCard } from './_partials/theme/card';

export default function SettingsPage() {
    return (
        <div className='divide-y divide-border [&>[data-slot=content]:first-child]:pb-6 [&>[data-slot=content]:not(:first-child)]:py-6'>
            <section data-slot='content' className='space-y-4'>
                <Header>
                    <HeaderTitle>Account Information</HeaderTitle>
                    <HeaderSubTitle className='max-w-xl'>
                        Update your name and email to update your profile information.
                    </HeaderSubTitle>
                </Header>

                <UpdateAccountForm />
            </section>

            <section data-slot='content' className='space-y-4'>
                <Header>
                    <HeaderTitle>Update Password</HeaderTitle>
                    <HeaderSubTitle className='max-w-xl'>
                        Manage your account by using the correct account and updating your password regularly.
                    </HeaderSubTitle>
                </Header>

                <UpdatePasswordForm />
            </section>

            <section data-slot='content' className='space-y-4'>
                <Header>
                    <HeaderTitle className='text-destructive'>Delete Account</HeaderTitle>
                    <HeaderSubTitle className='max-w-xl'>
                        Before you continue, be aware that this action is intended to delete your account.
                    </HeaderSubTitle>
                </Header>

                <DeleteAccountDialog>
                    <Button type='button' variant='destructive'>
                        Delete Account
                    </Button>
                </DeleteAccountDialog>
            </section>

            <section data-slot='content' className='space-y-4'>
                <Header>
                    <HeaderTitle>Theme Preference</HeaderTitle>
                    <HeaderSubTitle className='max-w-xl'>
                        Choose your theme base on your preference or choose system to synchronize with your device.
                    </HeaderSubTitle>
                </Header>

                <ThemeSelectionCard />
            </section>
        </div>
    );
}
