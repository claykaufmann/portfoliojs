export default class ImageGrid extends Component {
    constructor(props) {
        super(props);
        this.images = props.images;
    }

    render() {
        return this.images.forEach(image => {
            <figure>
                <img>image.url</img>
            </figure>;
        });
    }
}
