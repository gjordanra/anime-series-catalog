import Head from 'next/head';
import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react';

interface TProps {
    title: string;
    description?: string;
}

export const ApplicationWrapper:FC<PropsWithChildren <TProps>> = ({ title, description, children, }) => {
    return ( 
    <div className = "">
        <Head>
            <title>{title} | LatiNext Movies</title>
            {description && <meta name="description" content={description} />}

        </Head>
        <header>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <a href="/movies">Movies</a>
            </nav>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{'Gustavo Jordan'}
            </a>
        </footer>
        
    </div>
    );
};