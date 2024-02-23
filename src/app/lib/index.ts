import { Movies } from '../types';

export const getMovies = async (): Promise<Movies> => {
  const res = await fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=508a25f671b0a06c9ab8aec35944749e',
    { next: { revalidate: 3600 } }
  );

  return res.json();
};
