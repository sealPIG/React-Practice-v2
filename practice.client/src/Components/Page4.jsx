// redux
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie, removeMovie } from '../Redux/movieSlice';
import { Outter } from './Tools';

const MovieInput = () => {
  const [newMovie, setNewMovie] = useState('');

  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (newMovie) {
      dispatch(addMovie(newMovie));
      setNewMovie('');
    }
  }
  const handleRemoveMovie = () => {
    if (newMovie) {
      dispatch(removeMovie(newMovie));
      setNewMovie('');
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10vh' }}>
      <input style={{ marginRight: '3vw' }} onChange={(e) => setNewMovie(e.target.value)} value={newMovie} />
      <button style={{ marginRight: '1vw' }} onClick={handleAddMovie}>Add</button>
      <button style={{ marginRight: '1vw' }} onClick={handleRemoveMovie}>Remove</button>
    </div>
  );
}

export const Page4 = () => {
  console.log('[Page 4] Render');

  const movies = useSelector((state) => state.movies.movies);

  return (
    <Outter title='Page 4' subTitle='redux'>
      <MovieInput />
      {movies.map((movie) => (
        <p key={movie.id}>{movie.id}. {movie.name}</p>
      ))}
    </Outter>
  );
}