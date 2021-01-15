import PhotoLayout from '../../components/layouts/PhotoLayout/PhotoLayout';
import ImageGrid from '../../components/jsx-components/ImageGrid/ImageGrid';
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
        <PhotoLayout pageTitle={id}>
            <h2>{id}</h2>
            <ImageGrid images={photoData.imagesData} />
        </PhotoLayout>
    );
};
export default Gallery;
