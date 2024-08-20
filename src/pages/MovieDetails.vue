<template>
  <div class="movie-details-wrapper">
    <button class="button-home" @click="goHome">HOME</button>
    <div class="movie-details-container" v-if="movie">
      <div class="movies-container">
        <div class="pic-container">
          <img :src="movie.Poster" :alt="movie.Title" />
        </div>
        <div class="movies-details">
          <h1>{{ movie.Title }}</h1>
          <p><span>Year:</span> {{ movie.Year }}</p>
          <p><span>Released:</span> {{ movie.Released }}</p>
          <p><span>Director:</span> {{ movie.Director }}</p>
          <p><span>Actors:</span> {{ movie.Actors }}</p>
          <p><span>Language:</span> {{ movie.Language }}</p>
          <p><span>Awards:</span> {{ movie.Awards }}</p>
          <p><span>Metascore:</span> {{ movie.Metascore }}</p>
          <p><span>IMDb Rating:</span> {{ movie.imdbRating }}</p>
          <p><span>IMDb Votes:</span> {{ movie.imdbVotes }}</p>
          <p><span>Plot:</span> {{ movie.Plot }}</p>
          
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "@/api/client-http";

const route = useRoute();
const router = useRouter();
const movieId = route.params.id as string;

const movie = ref<any>(null);

const fetchMovieData = async () => {
  try {
    const response = await api.get("", {
      params: {
        i: movieId,
      },
    });
    movie.value = response.data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
};


const goHome = () => {
  router.push("/");
};

onMounted(() => {
  fetchMovieData();
});
</script>


<style lang="scss" scoped>


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
    backdrop-filter: blur(5px);
    border: 2px solid $primary;
    border-radius: 10px;
    box-shadow: 0 0 10px 5px $primary;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      border-radius: 10px;
      box-shadow: 0px 0px 50px 20px $white;
      border: solid 7px #ffffffbd;
      animation: efectShine s infinite
    
    }
  }

  .movies-details {
    width: 50%;
    height: 100%;

    backdrop-filter: blur(5px);
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
  }
  h1 {
    color: $white;
    font-size: 2rem;
    margin: 10px;
  }
  p {
    color: $white;
    font-size: 1.5rem;
    margin: 5px;
    span {
      color: $primary;
      font-weight: bold;
    }
  }
}
.movies-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 90%;
  padding: 20px;
  
}
.button-home {
  position: absolute;
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
.movie-details-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-home {
  position: absolute;
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



</style>
