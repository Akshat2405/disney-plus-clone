import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/movieSlice';
import userReducer from '../features/user/userSlice';
import movieClouserReducer from '../features/movieClouser/movieClouserSlice'
import movieTrendingReducer from '../features/movieTrending/movieTrendingSlice'

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer,
    movieClouser: movieClouserReducer,
    movieTrending: movieTrendingReducer
  },
});