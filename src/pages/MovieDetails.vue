<template>
  <div class="movie-details-container">
    <button class="button-home">HOME</button>
    <div class="pic-container">
      <img :src="props.poster" :alt="props.title" />
    </div>
    <div class="movies-details">
      <h1>MOVIE DETAILS {{ movieId }}</h1>
      <h1>{{ props.title }}</h1>
      <p>
        <span>Year:</span>
        {{ props.year }}
      </p>
      <p>
        <span>released:</span>
        {{ props.released }}
      </p>
      <p>
        <span>Director:</span>
        {{ props.director }}
      </p>
      <p>
        <span>Actors:</span>
        {{ props.Actors }}
      </p>
      <p>
        <span>Language:</span>
        {{ props.language }}
      </p>
      <p>
        <span>Awards:</span>
        {{ props.Awards }}
      </p>
      <p>
        <span>Metascore:</span>
        {{ props.Metascore }}
      </p>
      <p>
        <span>IMDb rating:</span>
        {{ props.imdbRating }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
const movieId = route.params.id;

interface IProps {
  title: string;
  poster: string;
  year: string;
  released: string;
  director: string;
  Actors: string;
  language: string;
  Awards: string;
  Metascore: string;
  imdbRating: string;
}

const props = defineProps<IProps>();
</script>
<style lang="scss" scoped>
.button-home {
  position: absolute; /* Cambio a absolute para mejorar la posición */
  top: 20px;
  left: 20px;
  background-color: $primary;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 10px 5px $primary;
}

.movie-details-container {
  width: 100vw;
  height: 100vh;
  background-image: url("@/assets/images/banner-bg.png");
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;

  .pic-container {
    width: 40%;
    height: 100%;
    background-color: rgba(16, 15, 15, 0.2);
    border: 2px solid $primary;
    border-radius: 10px;
    box-shadow: 0 0 10px 5px $primary;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      border-radius: 8px;
    }
  }

  .movies-details {
    width: 50%;
    height: 100%;
    background-color: rgba(16, 15, 15, 0.2);
    border: 2px solid $primary;
    border-radius: 10px;
    box-shadow: 0 0 10px 5px $primary;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
    overflow-y: auto;
    .p {
      color: $white;
      span {
        color: $primary;
        font-weight: bold;
      }
    }
  }
}
</style>
