import Image from './Image';

// ImageGrid component takes in an array of images, and creates images
const ImageGrid = ({ images }) => {
    return (
        <div>
            {images.map(image => (
                <Image
                    imgSrc={image.photo.src}
                    imgCaption={image.photo.caption}
                />
            ))}
        </div>
    );
};
export default ImageGrid;
