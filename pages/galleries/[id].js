import MainLayout from '../../components/layouts/MainLayout';
import { getGalleryPaths, getImageData } from '../../lib/galleries';

export async function getStaticPaths() {
    const paths = getGalleryPaths();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const photoUrls = getImageData(params.id);
    let id = params.id;

    return {
        props: {
            id,
            photoUrls,
        },
    };
}

export default function Gallery({ id }) {
    return (
        <MainLayout>
            <p>{id}</p>
        </MainLayout>
    );
}
