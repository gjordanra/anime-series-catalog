import Head from 'next/head';
import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react';
import { Nav } from '../common/Nav';

interface TProps {
    title: string;
    description?: string;
}

export const ApplicationWrapper:FC<PropsWithChildren <TProps>> = ({ title, description, children, }) => {
    return ( 
    <div className = "bg-black min-h-screen flex flex-col">
        <Head>
            <title>{title} | LatiNext Movies</title>
            {description && <meta name="description" content={description} />}

        </Head>
        <header className="bg-white h-20">
            <Nav />
        </header>
        <main className="grow flex flex-col text-white">
            {children}
        </main>
        <footer className='flex p-6 text-black bg-white gap-5 items-center justify-center'>
            <a
                href="https://www.linkedin.com/in/gustavojordanramirez"
                target="_blank"
                rel="noopener noreferrer"
                >
                Developed by <span className="text-orange-500">{'Gustavo Jordan'}</span>
            </a>  
            |          
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by {'RootStack / Vercel'}
            </a>
            
        </footer>
        
    </div>
    );
};