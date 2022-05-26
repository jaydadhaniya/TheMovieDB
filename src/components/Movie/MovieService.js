import axios from "@/utils/axios";
import miniToastr from "mini-toastr";

export default {
  /**
   * return detail of movie by id
   * @param {number} id movie id
   */
  getMovieDetails: async (id) => {
    try {
      const result = await axios.get(`movie/${id}`);
      miniToastr.success("Success fully fetched movie details");
      return result;
    } catch (error) {
      miniToastr.error(
        error.status_message,
        "Error while fetching movie details"
      );
      return {};
    }
  },
};
