import Head from 'next/head';
import BaseHeader from '../../jsx-components/BaseHeader/BaseHeader';
import Footer from '../../jsx-components/Footer/Footer';

const BaseLayout = ({ children, pageTitle }) => {
    return (
        <div>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <meta name='description' content='My personal portfolio' />
                <title>{pageTitle}</title>
                <meta name='og:title' content={pageTitle} />
            </Head>

            <div>{children}</div>
        </div>
    );
};
export default BaseLayout;
