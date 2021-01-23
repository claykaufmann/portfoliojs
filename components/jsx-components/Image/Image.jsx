import styles from './Image.module.scss';

const Image = ({ img }) => {
    return (
        <div className={styles.imageDiv}>
            <picture className={styles.image}>
                {/* if the viewport is anything larger than a phone, show the square thumbnail photo */}
                <source
                    media='(min-width: 415px)'
                    srcSet={img.photo.mobilesrc}
                />

                {/* default image to show right now is the full-res source, change this to be a phone friendly one */}
                <img src={img.photo.mobilesrc} alt={img.photo.caption} />
            </picture>
        </div>
    );
};
export default Image;
