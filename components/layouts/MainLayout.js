import Head from 'next/head';
import BaseNav from '../jsx-components/BaseNav';

export const siteTitle = 'Clay Kaufmann Photography';

export default function MainLayout({ children }) {
    return (
        <div>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <meta name='description' content='My photography portfolio' />
                <meta name='og:title' content={siteTitle} />
            </Head>

            <header>
                <h1>Clay Kaufmann Photography</h1>
                <BaseNav></BaseNav>
            </header>
            <div>{children}</div>
        </div>
    );
}
