import Burger from '../Menu/Burger';
import Menu from '../Menu/Menu';
import { useState } from 'react';

const BaseHeader = () => {
    const [open, setOpen] = useState(false);
    return (
        <header>
            {/* THIS SHOULD BE A PHOTO AT SOME POINT */}
            <h1>Clay Kaufmann Photography</h1>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </header>
    );
};
export default BaseHeader;
