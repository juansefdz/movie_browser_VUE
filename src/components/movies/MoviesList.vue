<template>
  <div class="containerMovies d-middle p-100">
    <CardMovie
      v-for="movie in listMovies"
      :id="movie.imdbID"
      :poster="movie.Poster"
      :title="movie.Title"
      :year="movie.Year"
      :type="movie.Type"
    />
  </div>
</template>

<script setup lang="ts">
import HTTP from "@/api/client-http";
import { onMounted, ref } from "vue";
import type { ApiResponse, Movie } from "@/components/model/movie.model";
import CardMovie from "@/components/movies/CardMovie.vue";

const listMovies = ref<Movie[]>([]);

onMounted(() => {
  fetchMovies();
});

const fetchMovies = async () => {
  const response: ApiResponse = await HTTP.get("", {
    params: {
      s: "movies",
    },
  });
  listMovies.value = response.data.Search;
};
</script>

<style lang="scss" scoped>
.containerMovies {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
