import { GetServerSideProps, NextPage } from 'next';
import React from 'react'
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper';
import Movie from '../../components/MovieList/Movie/Movie';
import { IMovie } from '../../components/MovieList/MovieList';

interface TProps {
    movie: IMovie;
}

const MovieDetailPage: NextPage<TProps> = ( {movie} ) => {
    console.log (movie);
    return (
        <ApplicationWrapper title={movie.Title}>
            <div className='flex grow justify-center items-start gap-5 p-5'>
              <div className='flex flex-col justify-start items-start'> 
                  <a href={movie.Poster} target = "blank">
                    back
                  </a>
              </div> 
              <div> 
                  <a href={movie.Poster} target = "blank">
                    <img className="cursor-pointer" src={movie.Poster} alt= {`${movie.Title} Poster`} />
                  </a>
              </div> 
              <div className='flex flex-col justify-start'> 
                <h1>Title: {movie.Title}</h1>
                <h3>Release Date: {movie['Release Date']}</h3>
                <h2>Major Genre: {movie['Major Genre']}</h2>
                <h3>Running Time min: {movie['Running Time min']}</h3>
                <h3>Director: {movie.Director}</h3>
                <h3>Distributor: {movie.Distributor}</h3>
                <h3>Creative Type: {movie['Creative Type']}</h3>
                <h2>Winnings</h2>
                <h2>Production Budget: {movie['Production Budget']}</h2>
                <h2>US Gross: {movie['US Gross']}</h2>
                <h3>Worldwide Gross: {movie['Worldwide Gross']}</h3>
                <h3>US DVD Sales:{movie['US DVD Sales']}</h3>
                <h2>Raitings</h2>
                <h3>Rotten Tomatoes Rating: {movie['Rotten Tomatoes Rating']}</h3>
                <h3>IMDB Rating: {movie['IMDB Rating']}</h3>
                <h3>MPAA Rating: {movie['MPAA Rating']}</h3>
              </div>
            </div>
        </ApplicationWrapper>
    )
}

export const getServerSideProps:GetServerSideProps = async (context) => {
    const res = await fetch (
        `${process.env.NEXT_PUBLIC_API_URL}/movies/${context.params.id}`
        );
    const movie = await res.json();
    return {
        props: {
            movie,
        }

    };
    
}
export default MovieDetailPage;
