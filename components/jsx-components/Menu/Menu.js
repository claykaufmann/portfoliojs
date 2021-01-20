import React from 'react';
import Link from 'next/link';
import { bool } from 'prop-types';
import styles from './Menu.module.scss';

const Menu = ({ open }) => {
    return (
        <nav className={open ? styles.openMenu : styles.closedMenu}>
            <Link href='/galleries' className={styles.menuLinkText}>
                <a className={styles.menuLinkText}>Galleries</a>
            </Link>
            <Link href='/galleries/featured' className={styles.menuLink}>
                <a className={styles.menuLinkText}>Featured</a>
            </Link>
            <Link href='/galleries/landscapes' className={styles.menuLink}>
                <a className={styles.menuLinkText}>Landscapes</a>
            </Link>
            <Link href='/galleries/abstract' className={styles.menuLink}>
                <a className={styles.menuLinkText}>Abstracts</a>
            </Link>
            <Link href='/galleries/blackwhite' className={styles.menuLink}>
                <a className={styles.menuLinkText}>Black and White</a>
            </Link>
            <Link href='/galleries/all' className={styles.menuLink}>
                <a className={styles.menuLinkText}>All Photos</a>
            </Link>
        </nav>
    );
};

export default Menu;