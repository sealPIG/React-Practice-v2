// redux
/**
 * Beginners - Redux Toolkit CRUD - https://www.youtube.com/watch?v=QgK_-G-hWeA&t=450s&ab_channel=PedroTech
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [
    { id: 1, name: "Inception" },
    { id: 2, name: "Interstellar" },
  ],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      console.log('[movieSlice] addMovie');

      const newMovie = {
        id: state.movies[state.movies.length - 1].id + 1,
        name: action.payload,
      };
      state.movies.push(newMovie);
    },
    removeMovie: (state, action) => {
      console.log('[movieSlice] removeMovie');

      state.movies = state.movies.filter((movie) => movie.name !== action.payload);
    },
  }
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;