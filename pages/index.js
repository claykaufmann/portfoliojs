import Head from 'next/head';
import MainLayout, { siteTitle } from '../components/layouts/MainLayout';

export default function Home() {
    return (
        <MainLayout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
        </MainLayout>
    );
}
