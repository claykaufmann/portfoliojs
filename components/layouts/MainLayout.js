import Head from 'next/head';
import BaseHeader from '../jsx-components/BaseHeader/BaseHeader';
import Footer from '../jsx-components/Footer/Footer';

export const siteTitle = 'Clay Kaufmann Photography';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <meta name='description' content='My photography portfolio' />
                <meta name='og:title' content={siteTitle} />
            </Head>

            <BaseHeader>test</BaseHeader>
            <div>{children}</div>
            <Footer></Footer>
        </div>
    );
};
export default MainLayout;
