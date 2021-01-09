import Image from './Image';

// ImageGrid component takes in an array of images, and creates images
const ImageGrid = ({ images }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center'>
            {images.map(image => (
                <Image
                    imgSrc={image.photo.thumbsrc}
                    imgCaption={image.photo.title}
                    key={image.title}
                />
            ))}
        </div>
    );
};
export default ImageGrid;
