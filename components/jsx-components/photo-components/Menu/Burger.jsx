import styles from './Burger.module.scss';
import { bool, func } from 'prop-types';

const Burger = ({ open, setOpen }) => {
    return (
        <div className={styles.main} open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </div>
    );
};
Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Burger;
