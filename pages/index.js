import Head from 'next/head';
import PhotoLayout, {
    siteTitle,
} from '../components/layouts/PhotoLayout/PhotoLayout';

// index page is going to be the splash page for photography
const Home = () => {
    return (
        <PhotoLayout>
            <h2>Photo Site Index</h2>
        </PhotoLayout>
    );
};
export default Home;
