import axios from "@/utils/axios";
import miniToastr from "mini-toastr";

export default {
  /**
   * fetch popular movies
   */
  fetchMovieList: async () => {
    try {
      const result = await axios.get(
        `discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      );
      miniToastr.success("Success fully fetched movie list");
      return result;
    } catch (error) {
      miniToastr.error(error.status_message, "Error while fetching movies");
      return { results: [] };
    }
  },
};
