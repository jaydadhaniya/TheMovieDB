<script>
import services from "./MovieService";
import generalService from "../../utils/general";
import humanizeDuration from "humanize-duration";
import { ArrowLeftOutlined } from "@ant-design/icons-vue";

export default {
  name: "MovieDetails",

  components: {
    ArrowLeftOutlined,
  },

  data() {
    return {
      movie: null,
      isLoading: false,
    };
  },

  created() {
    this.getMovie(this.$route.query.id);
  },

  methods: {
    async getMovie(id) {
      this.isLoading = true;
      this.movie = await services.getMovieDetails(id);
      this.isLoading = false;
    },

    getImagePath(poster_path) {
      return generalService.getMovieImageFullPath(poster_path, "w500");
    },

    getGenres(genres) {
      if (!genres) return "";
      return genres
        .map((genre) => {
          return genre.name;
        })
        .toString();
    },

    /**
     * return movie duration in human readable format
     * @param {number} runtime of movie
     */
    getTotalRunTime(runtime) {
      return humanizeDuration(runtime * 60000);
    },
  },
};
</script>

<template>
  <arrow-left-outlined class="go-back" @click="$router.go(-1)" />
  <div v-if="!isLoading">
    <a-row type="flex" justify="start" align="top" :gutter="100" class="row">
      <a-col :span="6">
        <img
          :src="getImagePath(movie.poster_path)"
          alt="Movie logo"
          height="400"
        />
      </a-col>
      <a-col :span="15">
        <div class="title">
          {{ movie.original_title }}
        </div>
        <div>
          <h3>
            {{ movie.release_date }} | {{ getGenres(movie.genres) }} |
            {{ getTotalRunTime(movie.runtime) }}
          </h3>
        </div>
        <a-progress
          type="circle"
          :percent="movie.vote_average * 10"
          :width="30"
        />
        user score
        <div>
          <h1>Overview</h1>
          <p>{{ movie.overview }}</p>
        </div>
      </a-col>
    </a-row>
  </div>
  <div v-else>
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.go-back {
  cursor: pointer;
  font-weight: bold;
  font-size: 25px;
  margin: 10px;
}
.row {
  height: 400px;
  background-color: rgb(230, 230, 230);
}
.title {
  padding-top: 20px;
  font-weight: bold;
  font-size: 25px;
}
</style>
