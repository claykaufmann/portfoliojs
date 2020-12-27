import { imageData } from './images'; // import the data needed for images
import dropbox, { Dropbox } from 'dropbox';

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
    // imagesData array will include all of the images to be displayed on the page
    const imagesData = [];

    // for each image inside the json file, check if it is in the necessary gallery
    imageData[1].images.forEach(image => {
        if (image.photo.galleries.includes(id)) {
            imagesData.push(image);
        }
    });
    // return the data
    return { imagesData };
}

// THESE FUNCTIONS WILL BE IMPLEMENTED WHEN I AM READY TO DEAL WITH DROPBOX
export function getDbxGalleryPaths() {
    // will need to get all of the different paths from the dropbox folder...
    let dbx = new Dropbox(config);
}

export function getDbxImageData(id) {
    // will need to map the root path directory straight to the necessary id
}
