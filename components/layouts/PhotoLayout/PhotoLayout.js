import Header from '../../jsx-components/photo-components/Header/Header';
import BaseLayout from '../BaseLayout/BaseLayout';
import Footer from '../../jsx-components/Footer/Footer';
import styles from './PhotoLayout.module.scss';

export default function PhotoLayout({ children, pageTitle }) {
    return (
        <BaseLayout pageTitle={pageTitle}>
            <div id={styles.page}>
                <Header></Header>
                <>{children}</>
                <Footer></Footer>
            </div>
        </BaseLayout>
    );
}
