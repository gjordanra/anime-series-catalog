import React, { useEffect, useState } from 'react'

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
        fetch ("http://localhost:3000/movies")
        .then ((res) => res.json())
        .then ((data: IMovie[]) => setMovies(data))
        .catch ((error) => console.log(error))
    }, []);
    return movies;
};

export const MovieList = () => {
    const movies = useMovies();
    console.log (movies);
    return (
        <div className="flex flex-col justify-center items-center text-white p-6">
            <ul className="w-full grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {movies.map((movie) => (
                    <li key={movie.id}>
                      <img src={movie.Poster} alt= {`${movie.Title} Poster`} />
                      <strong>{movie.Title}</strong>
                    </li>
                ))}
            </ul>
        </div>
    )
}
