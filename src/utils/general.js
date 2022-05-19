export default {
  /**
   * return full image path of given poster
   * @param {string} poster_path poster path
   * @param {string} imageSize image size
   */
  getMovieImageFullPath: (poster_path, imageSize = "w185") => {
    return `${import.meta.env.VITE_IMAGE_BASE_URL}${imageSize}${poster_path}`;
  },
};
