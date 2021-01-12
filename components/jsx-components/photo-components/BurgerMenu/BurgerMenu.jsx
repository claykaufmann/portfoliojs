import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';
import styles from './BurgerMenu.module.scss';

const BurgerMenu = () => {
    return (
        <Menu right>
            <Link href='/' className='menu-item'>
                <a>Back to main site</a>
            </Link>
            <Link href='/photography' className='menu-item'>
                <h1>Clay Kaufmann</h1>
            </Link>
            <Link href='/photography/galleries' className='menu-item'>
                <a>Galleries</a>
            </Link>
            <Link href='/photography/galleries/featured' className='menu-item'>
                <a>Featured</a>
            </Link>
            <Link
                href='/photography/galleries/landscapes'
                className='menu-item'
            >
                <a>Landscapes</a>
            </Link>
            <Link href='/photography/galleries/abstract' className='menu-item'>
                <a>Abstracts</a>
            </Link>
            <Link
                href='/photography/galleries/blackwhite'
                className='menu-item'
            >
                <a>Black and White</a>
            </Link>
            <Link href='/photography/galleries/all' className='menu-item'>
                <a>All Photos</a>
            </Link>
        </Menu>
    );
};

export default BurgerMenu;
