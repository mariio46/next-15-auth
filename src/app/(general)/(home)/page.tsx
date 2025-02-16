import { AuthUser } from './_user';

export default function Home() {
    return (
        <main>
            <h1>Home</h1>
            <div className='mt-10'>
                <AuthUser />
            </div>
        </main>
    );
}
