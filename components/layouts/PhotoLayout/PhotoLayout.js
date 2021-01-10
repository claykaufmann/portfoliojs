import Head from 'next/head';
import BaseHeader from '../../jsx-components/BaseHeader/BaseHeader';
import BaseLayout from '../BaseLayout/BaseLayout';
import Footer from '../../jsx-components/Footer/Footer';
import styles from './PhotoLayout.module.scss';

export default function PhotoLayout({ children, pageTitle }) {
    return (
        <BaseLayout pageTitle={pageTitle}>
            <div className={styles.main}>
                <BaseHeader>test</BaseHeader>
                <div>{children}</div>
                <Footer></Footer>
            </div>
        </BaseLayout>
    );
}
