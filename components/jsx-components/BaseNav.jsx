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
                    <a>Galleries</a>
                    <ul>
                        <li>
                            <a>Featured</a>
                        </li>
                        <li>
                            <a>Portraits</a>
                        </li>
                        <li>
                            <a>Landscapes</a>
                        </li>
                        <li>
                            <a>Abstract</a>
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
