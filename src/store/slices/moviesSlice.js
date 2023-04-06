import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload); //add reducer to one of your slices that changes state
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    resetMovies(state, action) {
      return [];
    }
  }
});

export const { addMovie, removeMovie, resetMovies } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
