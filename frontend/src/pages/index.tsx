import type { NextPage } from 'next';
import Head from 'next/head';

export const Home: NextPage = () => {
    return (
        <> 
            <Head> 
                <title>CateringHub - Premium Catering Services</title> 
                <meta name="description" content="Find and book premium catering services" /> 
                <link rel="icon" href="/favicon.ico" /> 
            </Head> 
            <main> 
                <h1>Welcome to CateringHub</h1> 
                <p>Your premier catering service platform</p> 
            </main> 
        </> 
    );
};

export default Home;