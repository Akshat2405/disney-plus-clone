import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    moviesClouser: []
}

const movieClouserSlice = createSlice({
    name: "movieClouser",
    initialState,
    reducers: {
        setClouserMovies: (state, action) => {
            state.moviesClouser  = action.payload
        }
    }
})

export const { setClouserMovies } = movieClouserSlice.actions;

export const selectClouserMovies = (state) => state.movieClouser.moviesClouser;

export default movieClouserSlice.reducer;