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
                <h2>Distributor: {movie.Distributor}</h2>
                <h2>Director: {movie.Director}</h2>
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
