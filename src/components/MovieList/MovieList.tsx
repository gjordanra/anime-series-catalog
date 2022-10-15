import React, { useEffect, useState } from 'react'
import Movie from './Movie/Movie';

export interface IMovie {
    "Title": string;
      "US Gross": number | null;
      "Worldwide Gross": number | null;
      "US DVD Sales": number | null;
      "Production Budget": number | null;
      "Release Date": string;
      "MPAA Rating": string;
      "Running Time min": number | null;
      "Distributor": string;
      "Source": number | null;
      "Major Genre": string;
      "Creative Type": string | null;
      "Director": string | null;
      "Rotten Tomatoes Rating": number | null;
      "IMDB Rating": number | null;
      "IMDB Votes": number | null;
      "id": number;
      "Poster": string;
}
const useMovies = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    useEffect (() => {
        fetch (`${process.env.NEXT_PUBLIC_API_URL}/movies`)
        .then ((res) => res.json())
        .then ((data: IMovie[]) => setMovies(data))
        .catch ((error) => console.log(error))
    }, []);
    return movies;
};


export const MovieList = () => {
    const movies = useMovies();
    const moviespage = 8; 
    const pages = Math.ceil(movies.length / moviespage);
    console.log (moviespage + ": Paginas " + pages + ": Peliculas: " + movies.length);
    console.log (movies);

    return (
        <div className="flex flex-col justify-center items-center text-white p-6">
            <ul className="w-full grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {movies.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </ul>
        </div>
    )
}
