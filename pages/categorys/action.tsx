import Head from 'next/head'
import { NextPage } from 'next';
import Link from 'next/link';

const Action : NextPage = () => {
  return (
    <>
      <Head>
          <title>MangaK LatinTV</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Action</h1>
      <Link href="/">Back to home</Link>  
    </>
    
   
  )
}
export default Action;
