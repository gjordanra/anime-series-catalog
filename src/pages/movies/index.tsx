import Head from 'next/head'
import { NextPage } from 'next';
import Link from 'next/link';
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper';

interface TProps {
    response: string;
}
const Movies : NextPage<TProps> = () => {
  return (
    <div className="container">
      <ApplicationWrapper title='Movies' description='Movies of LatiNext movies website'>
        <h1 className='text-3xl font-bold underline'>
            Hello Movies!
         </h1>
      </ApplicationWrapper>
    </div>
  )
}
export default Movies;