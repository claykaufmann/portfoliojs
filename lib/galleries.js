import { imageData } from './images'; // import the data needed for images

// function maps the galleries array into a json object with the params in order
// to make staticpaths work
export function getAllGalleryIds(galleries_array) {
    return galleries_array.map(galleryName => {
        return {
            params: {
                id: galleryName,
            },
        };
    });
}

// [id].js calls this function, it reads all the galleries
export function getGalleryPaths() {
    const gallery_array = [];
    // needs to be imageData[0] as an array is exported from images.js
    imageData[0].galleries.map(gallery => {
        gallery_array.push(gallery);
    });
    return getAllGalleryIds(gallery_array);
}

// this function collects all of the images from the gallery
export function getImageData(id) {
    // need to parse json file and return a list of all photos that have the id
    // within the tag attribute array within the image json file
    const imagesData = [];
    imageData[1].images.forEach(image => {
        imagesData.push(image);
    });
    // imagesData is an array of objects, needs to be turned into a 2
    // dimensional array as react does not allow the passing of objects

    return {
        imagesData,
    };
}
