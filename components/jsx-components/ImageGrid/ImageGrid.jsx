import Image from '../Image/Image';

// ImageGrid component takes in an array of images, and creates images
const ImageGrid = ({ images }) => {
    return (
        <div>
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
