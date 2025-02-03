// redux
/**
 * Beginners - Redux Toolkit CRUD - https://www.youtube.com/watch?v=QgK_-G-hWeA&t=450s&ab_channel=PedroTech
 */

import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});