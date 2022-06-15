import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import tonberry from '../public/tonberry.gif';

const Home: NextPage = () => {
  return (
    <div className='border-2 border-red-600 h-screen flex flex-col bg-black text-neutral-300'>
      <Head>
        <title>Intro Section with Dropdown Navigation</title>
        <meta
          name='description'
          content='Intro Dropdown Frontend Mentor project'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='border-2 flex-grow'>
        <p>Testing</p>
      </main>

      <footer>
        <p className='justify-center items-center gap-1 flex py-2'>
          Built by{' '}
          <span>
            <a
              className='text-blue-700 font-bold'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/AlsoPeters'
            >
              AlsoPeters
            </a>
          </span>
          <Image height={40} width={40} src={tonberry} alt='tonberry'></Image>
        </p>
      </footer>
    </div>
  );
};

export default Home;
