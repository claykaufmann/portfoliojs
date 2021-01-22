import Image from '../Image/Image';

// ImageGrid component takes in an array of images, and creates images
const ImageGrid = ({ images }) => {
    return (
        <div>
            {images.map(image => (
                <Image img={image} />
            ))}
        </div>
    );
};
export default ImageGrid;
