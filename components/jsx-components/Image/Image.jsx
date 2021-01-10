const Image = ({ imgSrc, imgCaption }) => {
    return (
        <figure>
            <img src={imgSrc} />
            <figcaption>{imgCaption}</figcaption>
        </figure>
    );
};
export default Image;