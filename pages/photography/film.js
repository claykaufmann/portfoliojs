import Head from 'next/head';
import PhotoLayout, {
    siteTitle,
} from '../../components/layouts/PhotoLayout/PhotoLayout';

// index page is going to be the splash page
const Film = () => {
    return (
        <PhotoLayout>
            <h2>Film Shots</h2>
        </PhotoLayout>
    );
};
export default Film;
