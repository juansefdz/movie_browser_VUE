<template>
  <div class="containerMovies d-middle p-100">
    <CardMovie
      v-for="movie in store.listMovies"
      v-if="store.listMovies.length > 0"
      :id="movie.imdbID"
      :poster="movie.Poster"
      :title="movie.Title"
      :year="movie.Year"
      :type="movie.Type"
    />
    <div class="d-middle w-100">
      <p>no search results found</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
<<<<<<< HEAD
import type { ApiResponse, Movie } from "@/components/model/movie.model.ts";
import CardMovie from "@/components/movies/CardMovies.vue";
import { useMoviesStore } from "@/store/movies.store";
=======
import type { ApiResponse, Movie } from "@/components/model/movie.model";
import CardMovie from "@/components/movies/CardMovies.vue";
>>>>>>> 22b291b75d761ad943a6840a0a378c5825c41e84

const listMovies = ref<Movie[]>([]);

const store = useMoviesStore();
onMounted(() => {
  fetchMovies();
});

const fetchMovies = async () => {
  await store.getMovies();
};
</script>

<style lang="scss" scoped>
.containerMovies {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

p {
  font-size: 20px;
  color: $white;
}
</style>
