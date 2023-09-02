import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movie } from '../models/movie.model';

// Define a service using a base URL and expected endpoints
export const topRatedMoviesApi = createApi({
    reducerPath: 'topRatedMoviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
    endpoints: (builder) => ({
      getTopRatedMovies: builder.query<Movie, string>({
        query: (searchKey) => `${searchKey}?api_key=c88a7d7836958f45aa4a41300b1c6496&language=en-US`,
      }),
    }),
  })

  export const { useGetTopRatedMoviesQuery } = topRatedMoviesApi