import Link from 'next/link';

const BaseNav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/photography'>
                        <a>Photography</a>
                    </Link>
                    <ul>
                        <li>
                            <Link href='/photography/galleries'>
                                <a>Galleries</a>
                            </Link>
                            <ul>
                                <li>
                                    <Link href='/photography/galleries/featured'>
                                        <a>Featured</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/photography/galleries/landscapes'>
                                        <a>Landscapes</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/photography/galleries/california'>
                                        <a>California</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/photography/galleries/vermont'>
                                        <a>Vermont</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href='/photography/film'>
                                <a>Film</a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
export default BaseNav;
