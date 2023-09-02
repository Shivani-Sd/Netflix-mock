import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import previewImageReducer from '../features/previewImageSlice'
import { topRatedMoviesApi } from '../services/topRatedMovies'

export const store = configureStore({
  reducer: {
    [topRatedMoviesApi.reducerPath]: topRatedMoviesApi.reducer,
    previewImage : previewImageReducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(topRatedMoviesApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch