import type { NextPage } from 'next';

import Head from 'next/head';
import MobileMenu from '../components/MobileMenu';
import Nav from '../components/Nav';
import Body from '../components/Body';
import Footer from '../components/Footer';
import { useState } from 'react';

const Home: NextPage = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  function handleMenu() {
    return setMobileMenuActive(!mobileMenuActive);
  }

  return (
    <div className='flex flex-col w-full h-screen bg-almost-white'>
      <Head>
        <title>Intro Section with Dropdown Navigation</title>
        <meta
          name='description'
          content='Intro Dropdown Frontend Mentor project'
        />
        <link rel='icon' href='/photos/favicon-32x32.png' />
      </Head>
      {mobileMenuActive ? (
        <MobileMenu
          mobileMenuActive={mobileMenuActive}
          handleMenu={handleMenu}
        />
      ) : null}
      <Nav handleMenu={handleMenu} />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
