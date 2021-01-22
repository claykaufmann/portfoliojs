import Image from '../Image/Image';
import styles from './ImageGrid.module.scss';

// ImageGrid component takes in an array of images, and creates images
const ImageGrid = ({ images }) => {
    return (
        <div className={styles.images}>
            {images.map(image => (
                <Image img={image} />
            ))}
        </div>
    );
};
export default ImageGrid;
