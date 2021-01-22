const Image = ({ img }) => {
    return (
        <picture>
            {/* if the viewport is anything larger than a phone, show the square thumbnail photo */}
            <source media='(min-width: 415px)' srcSet={img.photo.thumbsrc} />

            {/* default image to show right now is the full-res source, change this to be a phone friendly one */}
            <img src={img.photo.src} alt={img.photo.caption} />
        </picture>
    );
};
export default Image;
