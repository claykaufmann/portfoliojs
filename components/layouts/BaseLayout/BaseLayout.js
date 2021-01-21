import Head from 'next/head';
import styles from './BaseLayout.module.scss';
import Header from '../../jsx-components/Header/Header';
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
            <Header />
            <div className={styles.pageContent}>{children}</div>
            <Footer id={styles.footer} />
        </div>
    );
};
export default BaseLayout;
