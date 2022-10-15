import Head from 'next/head'
import { NextPage } from 'next';
import Link from 'next/link';
import { ApplicationWrapper } from '../components/layout/ApplicationWrapper';

const Home : NextPage = () => {
  return (
    <div className="container">
      <ApplicationWrapper title='Home' description='Home of LatiNext movies website'>
        <h1 className='text-3xl font-bold underline'>
            Hello world!
         </h1>
      </ApplicationWrapper>
    </div>
  )
}
export default Home;
