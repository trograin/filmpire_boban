// ALL the calls to the TMDB API are made here
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi', //every createApi call need to have a reducerpath. it is just a string
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }), // Has to also have a baseQuery fetching the URL of the API
    endpoints: (builder) => ({
        //* Get movies by [Type]
        getMovies: builder.query({
            query: () => `/movie/popular?page=${page}&api_key=${tmdbApiKey}`,
        }),
    }),
});

export const {
    useGetMoviesQuery,
} = tmdbApi;