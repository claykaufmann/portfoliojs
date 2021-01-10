import Link from 'next/link';
import { bool } from 'prop-types';
import styles from './Menu.module.scss';

const Menu = ({ open }) => {
    const isOpen = open;
    return (
        <div className={styles.main}>
            <Link href='/'>
                <a>Back to main site</a>
            </Link>
            <Link href='/photography'>
                <h1>Clay Kaufmann</h1>
            </Link>
            <Link href='/photography/galleries'>
                <a>Galleries</a>
            </Link>
            <Link href='/photography/galleries/featured'>
                <a>Featured</a>
            </Link>
            <Link href='/photography/galleries/landscapes'>
                <a>Landscapes</a>
            </Link>
            <Link href='/photography/galleries/abstract'>
                <a>Abstracts</a>
            </Link>
            <Link href='/photography/galleries/blackwhite'>
                <a>Black and White</a>
            </Link>
            <Link href='/photography/galleries/all'>
                <a>All Photos</a>
            </Link>
        </div>
    );
};

Menu.propTypes = {
    open: bool.isRequired,
};

export default Menu;
