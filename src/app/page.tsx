import Image from 'next/image';
import { Movies } from './types';

const getMovies = async (): Promise<Movies> => {
  const res = await fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=508a25f671b0a06c9ab8aec35944749e'
  );

  return res.json();
};

export default async function Home() {
  const movies = await getMovies();

  return (
    <main className='px-10 py-16'>
      <h1 className='text-center text-5xl font-bold'>Favlog movies test</h1>
      <div className='mt-10'>
        <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3'>
          {movies.results.map((movie) => (
            <li key={movie.id}>
              <h2 className='font-semibold text-lg text-wrap mb-3'>
                {movie.title}
              </h2>
              <figure className='w-[150px] h-[220px]'>
                <Image
                  className='rounded-md w-full h-full object-cover'
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.title}
                  height={150}
                  width={150}
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
