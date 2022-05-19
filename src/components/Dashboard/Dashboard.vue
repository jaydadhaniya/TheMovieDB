<script>
import dashboardService from "./DashboardService";
import generalService from "../../utils/general";

export default {
  name: "DashboardComponent",
  data() {
    return {
      movies: [],
      isLoading: false,
    };
  },

  created() {
    this.fetchMovies();
  },

  methods: {
    async fetchMovies() {
      this.isLoading = true;
      const data = await dashboardService.fetchMovieList();
      this.movies = data.results;
      this.isLoading = false;
    },

    getImagePath(poster_path) {
      return generalService.getMovieImageFullPath(poster_path);
    },

    gotoMovie(movie) {
      this.$router.push({
        path: `/movie/${movie.title.replaceAll(" ", "-")}`,
        query: {
          id: movie.id,
        },
      });
    },
  },
};
</script>

<template>
  <div v-if="!isLoading">
    <h1><b>Popular Movies</b></h1>
    <a-row type="flex" justify="start" align="top" :gutter="50">
      <a-col :span="4" v-for="movie in movies" :key="movie.title">
        <div class="poster" @click="gotoMovie(movie)">
          <img
            :src="getImagePath(movie.poster_path)"
            alt="Movie logo"
            height="250"
          />
        </div>
        <div class="movie-details">
          <h1>
            <b>{{ movie.title }}</b>
          </h1>
        </div>
      </a-col>
    </a-row>
  </div>
  <div v-else>
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.poster {
  background: black;
  border: 1px solid #fff;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
}

.movie-details {
  padding-left: 10px;
  background: #fff;
  font-size: 11px;
  text-align: initial;
  line-height: 1.3;
}
</style>
