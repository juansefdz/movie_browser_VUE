<template>
  <div class="container-movies d-middle p-100">

     <CardMovie 
          v-for="movie in store.listMovies"
          v-if="store.listMovies"
          :id="movie.imdbID"
          :poster="movie.Poster"
          :title="movie.Title"
          :year="movie.Year"
          :type="movie.Type"
     />
     <div class="container-alert d-middle w-100" v-else>
          <p>No search results found</p>
     </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import CardMovie from "@/components/movies/CardMovies.vue"
import { useMoviesStore } from "@/store/movies.store"

const store = useMoviesStore()
onMounted(()=> {
  console.log('ListMovies mounted')
  fetchMovies()
})



async function  fetchMovies() {
await store.getMovies()
}   
</script>

<style scoped lang="scss">
.container-movies {
  flex-wrap: wrap;
  gap: 20px
}
.container-alert{
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  
  

}

p{
  color: $white;
}
</style>    