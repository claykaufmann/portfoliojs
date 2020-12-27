import Head from 'next/head';
import MainLayout from '../components/layouts/MainLayout';
import PhotoLayout, { siteTitle } from '../components/layouts/MainLayout';

// index page is going to be the splash page
const Home = () => {
    return (
        <MainLayout>
            <h2>MAIN INDEX</h2>
        </MainLayout>
    );
};
export default Home;
