import Header from '../../jsx-components/photo-components/Header/Header';
import BaseLayout from '../BaseLayout/BaseLayout';
import Footer from '../../jsx-components/Footer/Footer';
import styles from './PhotoLayout.module.scss';

export default function PhotoLayout({ children, pageTitle }) {
    return (
        <BaseLayout pageTitle={pageTitle}>
            <div className={styles.main}>
                <Header>test</Header>
                <div>{children}</div>
                <Footer></Footer>
            </div>
        </BaseLayout>
    );
}
