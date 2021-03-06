import React from 'react';
import Link from 'next/link';
import { bool } from 'prop-types';
import styles from './Menu.module.scss';

const Menu = ({ open, setOpen }) => {
    return (
        <nav className={open ? styles.openMenu : styles.closedMenu}>
            <Link href='/' className={styles.menuLink}>
                <a
                    className={styles.menuLinkText}
                    onClick={() => setOpen(!open)}
                >
                    Home
                </a>
            </Link>
            <Link href='/about' className={styles.menuLink}>
                <a
                    className={styles.menuLinkText}
                    onClick={() => setOpen(!open)}
                >
                    About
                </a>
            </Link>
            <Link href='/galleries/featured' className={styles.menuLink}>
                <a
                    className={styles.menuLinkText}
                    onClick={() => setOpen(!open)}
                >
                    Featured
                </a>
            </Link>
            <Link href='/galleries/landscapes' className={styles.menuLink}>
                <a
                    className={styles.menuLinkText}
                    onClick={() => setOpen(!open)}
                >
                    Landscapes
                </a>
            </Link>
            <Link href='/galleries/abstract' className={styles.menuLink}>
                <a
                    className={styles.menuLinkText}
                    onClick={() => setOpen(!open)}
                >
                    Abstracts
                </a>
            </Link>
            <Link href='/galleries/blackwhite' className={styles.menuLink}>
                <a
                    className={styles.menuLinkText}
                    onClick={() => setOpen(!open)}
                >
                    Black / White
                </a>
            </Link>
            <Link href='/film' className={styles.menuLink}>
                <a
                    className={styles.menuLinkText}
                    onClick={() => setOpen(!open)}
                >
                    Film
                </a>
            </Link>
        </nav>
    );
};

export default Menu;
