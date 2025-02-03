// 生命週期、props 傳遞、redux
import { useSelector } from 'react-redux'
import { Outter } from './Tools'

export const Home = () => {
  console.log('[Home] Render');
  
  const movies = useSelector((state) => state.movies.movies);

  return (
    <Outter title='Home'>
      <h2>Movie List</h2>
      {movies.map((movie) => (
        <p key={movie.id}>{movie.id}. {movie.name}</p>
      ))}
    </Outter>
  );
}