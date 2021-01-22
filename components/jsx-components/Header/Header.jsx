import { useState, useRef } from 'react';
import { useOnClickOutside } from '../../../lib/hooks';
import Link from 'next/link';
import Burger from '../Burger/Burger';
import Menu from '../Menu/Menu';

import styles from './Header.module.scss';

const Header = () => {
    const [open, setOpen] = useState(false);

    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    return (
        <header className={styles.main}>
            {/* THIS SHOULD BE A PHOTO AT SOME POINT */}
            <div ref={node} className={styles.burgerDiv}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
            <Link href='/'>
                <h1 className={styles.headingText}>
                    Clay Kaufmann Photography
                </h1>
            </Link>
        </header>
    );
};

export default Header;
