export default function Image({ imgSrc, imgCaption }) {
    return (
        <figure>
            <img src={imgSrc} />
            <figcaption>{imgCaption}</figcaption>
        </figure>
    );
}
