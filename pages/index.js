import Head from 'next/head';
import MainLayout, { siteTitle } from '../components/layouts/MainLayout';

// index page is going to be the splash page
export default function Home() {
    return (
        <MainLayout>
            <h2>INDEX</h2>
        </MainLayout>
    );
}
