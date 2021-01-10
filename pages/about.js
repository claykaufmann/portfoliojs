import Head from 'next/head';
import PhotoLayout, {
    siteTitle,
} from '../../components/layouts/PhotoLayout/PhotoLayout';

const About = () => {
    return (
        <PhotoLayout>
            <Head></Head>
            <h2>ABOUT</h2>
        </PhotoLayout>
    );
};
export default About;
