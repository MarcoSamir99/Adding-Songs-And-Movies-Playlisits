import { configureStore } from "@reduxjs/toolkit";
import {
  songsReducer,
  addSong,
  removeSong,
  resetSongs
} from "./slices/songsSlice";
import {
  moviesReducer,
  addMovie,
  removeMovie,
  resetMovies
} from "./slices/moviesSlice";

const store = configureStore({
  reducer: {
    songs: songsReducer, //we have songs key andd value will be produced by songslice reducer
    movies: moviesReducer
  }
});

export {
  store,
  addSong,
  removeSong,
  resetSongs,
  addMovie,
  removeMovie,
  resetMovies
};
