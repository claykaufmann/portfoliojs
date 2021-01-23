import Image from '../Image/Image';
import AliceCarousel from 'react-alice-carousel';
import styles from './ImageCarousel.module.scss';

const ImageCarousel = ({ images }) => {
    return (
        <AliceCarousel autoPlay autoPlayInterval='3000'>
            {images.map(image => (
                <img
                    src={image.photo.mobilesrc}
                    alt={image.photo.caption}
                    className={styles.sliderImg}
                />
            ))}
        </AliceCarousel>
    );
};

export default ImageCarousel;
