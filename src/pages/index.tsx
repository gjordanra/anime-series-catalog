import Head from 'next/head'
import { NextPage } from 'next';
import Link from 'next/link';
import { ApplicationWrapper } from '../components/layout/ApplicationWrapper';

const Home : NextPage = () => {
  return (
      <ApplicationWrapper 
        title="Home" 
        description="Home of LatiNext movies website">
        <div className="grow flex flex-col items-center justify-center bg-[url('/images/home-bg.jpg')]">
          <div className="grow flex bg-black w-full justify-center items-center opacity-50">
            <h1 className="text-7xl font-bold underline text-white">
                Bienvenidos a LatiNext Movies!
            </h1>
          </div>
        </div>
      </ApplicationWrapper>
   
  )
}
export default Home;
