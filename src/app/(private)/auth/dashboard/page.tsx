import { Header, HeaderSubTitle, HeaderTitle } from '@/components/header';

export default function DashboardPage() {
    return (
        <>
            <Header>
                <HeaderTitle>Welcome to your dashboard</HeaderTitle>
                <HeaderSubTitle className='max-w-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odit magnam doloribus? Reiciendis
                    dolore unde fugit corporis aut dignissimos libero!
                </HeaderSubTitle>
            </Header>
        </>
    );
}
