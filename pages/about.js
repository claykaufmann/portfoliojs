import Head from 'next/head';
import MainLayout, { siteTitle } from '../components/layouts/MainLayout';

export default function About() {
    return (
        <MainLayout>
            <Head></Head>
            <h2>ABOUT</h2>
        </MainLayout>
    );
}
