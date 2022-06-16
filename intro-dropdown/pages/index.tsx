import type { NextPage } from 'next';

import Head from 'next/head';
import Nav from '../components/Nav';
import Body from '../components/Body';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className='flex flex-col h-screen bg-almost-white'>
      <Head>
        <title>Intro Section with Dropdown Navigation</title>
        <meta
          name='description'
          content='Intro Dropdown Frontend Mentor project'
        />
      </Head>
      <Nav />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
