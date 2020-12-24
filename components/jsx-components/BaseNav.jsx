export default function BaseNav() {
    return (
        <nav>
            <ul>
                <li>
                    <a>Home</a>
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
            </ul>
        </nav>
    );
}
