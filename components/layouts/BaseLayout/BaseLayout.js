import Head from 'next/head';
import styles from './BaseLayout.module.scss';

const BaseLayout = ({ children, pageTitle }) => {
    return (
        <div>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <meta name='description' content='My personal portfolio' />
                <title>{pageTitle}</title>
                <meta name='og:title' content={pageTitle} />
            </Head>
            <>{children}</>
        </div>
    );
};
export default BaseLayout;
