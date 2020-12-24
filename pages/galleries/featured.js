import Head from 'next/head';
import GalleryLayout from '../../components/layouts/GalleryLayout';

export default function Home() {
    return (
        <GalleryLayout home>
            <Head></Head>
        </GalleryLayout>
    );
}
