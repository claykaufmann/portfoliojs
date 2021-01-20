import { useState } from 'react';
import Link from 'next/link';
import Burger from '../Burger/Burger';
import Menu from '../Menu/Menu';

import styles from './Header.module.scss';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className={styles.main}>
            {/* THIS SHOULD BE A PHOTO AT SOME POINT */}
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
            <Link href='/'>
                <h1 className={styles.headingText}>
                    Clay Kaufmann Photography
                </h1>
            </Link>
        </header>
    );
};

export default Header;
