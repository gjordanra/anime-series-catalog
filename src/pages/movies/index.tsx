import Head from 'next/head'
import { NextPage } from 'next';
import Link from 'next/link';
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper';
import { MovieList } from '../../components/MovieList/MovieList';

interface TProps {
    response: string;
}
const Movies : NextPage<TProps> = () => {
  return (
      <ApplicationWrapper 
        title="Movies" 
        description="Movies of LatiNext movies website">
        <MovieList />
      </ApplicationWrapper>
  )
}
export default Movies;