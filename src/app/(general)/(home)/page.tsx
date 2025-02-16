import { Container } from '@/components/container';
import { Header, HeaderSubTitle, HeaderTitle } from '@/components/header';

import { ButtonNavigation } from './_button-navigation';

export default function Home() {
    return (
        <>
            <section id='hero' className='relative border-b py-32'>
                <div className='absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'></div>
                <div className='absolute top-0 -z-10 h-full w-full'>
                    <div className='absolute bottom-auto left-auto right-0 top-0 h-[400px] w-[400px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]'></div>
                </div>
                <Container>
                    <Header className='space-y-4'>
                        <HeaderTitle className='max-w-2xl text-foreground/70 lg:text-4xl'>
                            Managed your <span className='text-foreground'>Next.JS</span> Authentication using{' '}
                            <span className='text-[#FF2D20]'>Laravel</span> &
                            <span className='text-violet-600'> JWT.IO</span>
                        </HeaderTitle>
                        <HeaderSubTitle className='max-w-2xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni blanditiis magnam
                            maxime cumque voluptates ipsum deleniti similique illum ut reprehenderit, perspiciatis porro
                            dolor ratione?.
                        </HeaderSubTitle>
                        <ButtonNavigation />
                    </Header>
                </Container>
            </section>
        </>
    );
}
