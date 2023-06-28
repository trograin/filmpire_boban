// ALL the calls to the TMDB API are made here
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi', //every createApi call need to have a reducerpath. it is just a string
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }), // Has to also have a baseQuery fetching the URL of the API
    endpoints: (builder) => ({
        //* Get Genres
        getGenres: builder.query({
            query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
        }),

        //* Get movies by [Type]
        getMovies: builder.query({
            query: ({ genreIdOrCategoryName,page }) => {

                //* Get movies by Categry
                if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
                    return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`
                }

                //* Get movies by Genre
                if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
                    return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`
                }

                //* Get Popular movies
                return `movie/popular?page=${page}&api_key=${tmdbApiKey}`
            }
        }),
    }),
});

export const {
    useGetGenresQuery,
    useGetMoviesQuery,
} = tmdbApi;