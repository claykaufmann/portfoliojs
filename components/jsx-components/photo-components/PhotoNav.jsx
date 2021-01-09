import Link from 'next/link';

const PhotoNav = () => {
    return (
        <nav>
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
        </nav>
    );
};

export default PhotoNav;
