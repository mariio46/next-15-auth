import { Header, HeaderSubTitle, HeaderTitle } from '@/components/header';

export default function SettingsPage() {
    return (
        <div className='divide-y divide-border [&>[data-slot=content]:first-child]:pb-6 [&>[data-slot=content]:not(:first-child)]:py-6'>
            <section data-slot='content'>
                <Header>
                    <HeaderTitle>Account Information</HeaderTitle>
                    <HeaderSubTitle className='max-w-xl'>
                        Update your name and email to update your profile information.
                    </HeaderSubTitle>
                </Header>
            </section>

            <section data-slot='content'>
                <Header>
                    <HeaderTitle>Update Password</HeaderTitle>
                    <HeaderSubTitle className='max-w-xl'>
                        Manage your account by using the correct account and updating your password regularly.
                    </HeaderSubTitle>
                </Header>
            </section>

            <section data-slot='content'>
                <Header>
                    <HeaderTitle>Danger Area</HeaderTitle>
                    <HeaderSubTitle className='max-w-xl'>
                        Manage your account by using the correct account and updating your password regularly.
                    </HeaderSubTitle>
                </Header>
            </section>

            <section data-slot='content'>
                <Header>
                    <HeaderTitle>Theme Prefrence</HeaderTitle>
                    <HeaderSubTitle className='max-w-xl'>
                        Manage your account by using the correct account and updating your password regularly.
                    </HeaderSubTitle>
                </Header>
            </section>
        </div>
    );
}
