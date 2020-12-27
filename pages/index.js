import Head from 'next/head';
import MainLayout, { siteTitle } from '../components/layouts/MainLayout';

// index page is going to be the splash page
const Home = () => {
    return (
        <MainLayout>
            <h2>INDEX</h2>
        </MainLayout>
    );
};
export default Home;
