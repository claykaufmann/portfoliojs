import React from 'react';
import { bool, func } from 'prop-types';
import styles from './Burger.module.scss';

const Burger = ({ open, setOpen }) => {
    return (
        <div
            className={open ? styles.burger : styles.cross}
            open={open}
            onClick={() => setOpen(!open)}
        >
            <div className={styles.barBurger} />
            <div className={styles.barBurger} />
            <div className={styles.barBurger} />
        </div>
    );
};
Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Burger;
