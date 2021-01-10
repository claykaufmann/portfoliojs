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
