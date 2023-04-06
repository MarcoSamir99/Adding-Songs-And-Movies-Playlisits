import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload); //add reducer to one of your slices that changes state
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    resetSongs(state, action) {
      return [];
    }
  }
});

export const { addSong, removeSong, resetSongs } = songsSlice.actions;
//state in create slice means the state of the specific part of redux but state in any other part in the project mean the whole redux store state
export const songsReducer = songsSlice.reducer;
