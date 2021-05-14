import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    moviesTrending: []
}

const movieTrendingSlice = createSlice({
    name: "movieTrending",
    initialState,
    reducers: {
        setTrendingMovies: (state, action) => {
            state.moviesTrending  = action.payload
        }
    }
})

export const { setTrendingMovies } = movieTrendingSlice.actions;

export const selectTrendingMovies = (state) => state.movieTrending.moviesTrending;

export default movieTrendingSlice.reducer;