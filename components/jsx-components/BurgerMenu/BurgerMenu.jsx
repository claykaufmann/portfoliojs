import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';
import styles from './BurgerMenu.module.scss';

// this import is needed to style the burger menu
import menuStyles from './menuStyles';

const BurgerMenu = () => {
    return (
        <Menu right styles={menuStyles}>
            <Link href='/galleries' className='menu-item'>
                <a className={styles.menuLink}>Galleries</a>
            </Link>
            <Link href='/galleries/featured' className='menu-item'>
                <a className={styles.menuLink}>Featured</a>
            </Link>
            <Link href='/galleries/landscapes' className='menu-item'>
                <a className={styles.menuLink}>Landscapes</a>
            </Link>
            <Link href='/galleries/abstract' className='menu-item'>
                <a className={styles.menuLink}>Abstracts</a>
            </Link>
            <Link href='/galleries/blackwhite' className='menu-item'>
                <a className={styles.menuLink}>Black and White</a>
            </Link>
            <Link href='/galleries/all' className='menu-item'>
                <a className={styles.menuLink}>All Photos</a>
            </Link>
        </Menu>
    );
};

export default BurgerMenu;
