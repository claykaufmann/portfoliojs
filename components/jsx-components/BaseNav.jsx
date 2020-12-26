import Link from 'next/link';

export default function BaseNav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/galleries'>
                        <a>Galleries</a>
                    </Link>
                    <ul>
                        <li>
                            <Link href='/galleries/featured'>
                                <a>Featured</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/galleries/landscapes'>
                                <a>Landscapes</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/galleries/california'>
                                <a>California</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/galleries/vermont'>
                                <a>Vermont</a>
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
}
