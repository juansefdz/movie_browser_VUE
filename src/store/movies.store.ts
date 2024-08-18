import type { Movie } from "@/model/movie.store";
import HTTP from "@/api/client-http"
import { defineStore } from "pinia";

export const useMoviesStore = defineStore('movies', {
    state: () => ({
        listMovies: [] as  Movie[]
    }),
    actions: {
        async getMovies(search:string = 'movies'){
            const resp =  await HTTP.get('',{
                params: {
                    s: search
                }
            })
            this.listMovies = resp.data.Search;
        }
    }
})