import MainLayout from '../../components/layouts/MainLayout';
import ImageGrid from '../../components/jsx-components/ImageGrid';
import { getGalleryPaths, getImageData } from '../../lib/galleries';

export async function getStaticPaths() {
    const paths = getGalleryPaths();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const photoData = getImageData(params.id);
    let id = params.id;
    return {
        props: {
            id,
            photoData,
        },
    };
}

const Gallery = ({ id, photoData }) => {
    return (
        <MainLayout>
            <h2>{id}</h2>
            <ImageGrid images={photoData.imagesData} />
        </MainLayout>
    );
};
export default Gallery;
