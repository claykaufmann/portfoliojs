import Link from 'next/link';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.main}>
            {/* THIS SHOULD BE A PHOTO AT SOME POINT */}
            <BurgerMenu />
        </header>
    );
};

export default Header;
