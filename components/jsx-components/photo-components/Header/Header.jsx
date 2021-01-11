import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';

const BaseHeader = () => {
    return (
        <header>
            {/* THIS SHOULD BE A PHOTO AT SOME POINT */}
            <h1>Clay Kaufmann Photography</h1>
            <Menu>
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
            </Menu>
        </header>
    );
};

export default BaseHeader;
