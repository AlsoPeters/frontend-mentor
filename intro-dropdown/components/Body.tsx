import Image from 'next/image';
import DesktopHero from '../public/photos/image-hero-desktop.png';
import DataBiz from '../public/photos/client-databiz.svg';
import Audiophile from '../public/photos/client-audiophile.svg';
import Meet from '../public/photos/client-meet.svg';
import Maker from '../public/photos/client-maker.svg';

export default function Body() {
  return (
    <main className='flex-grow bg-almost-white'>
      <div className='flex items-center justify-between h-full border-2 border-blue-600 px-60'>
        <div className='flex flex-col gap-12 border-2 '>
          <div>
            <p className='font-bold text-9xl'>Make</p>
            <p className='font-bold text-9xl'>remote work</p>
          </div>
          <div>
            <p className='text-2xl text-gray-500 border-2'>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
          </div>
          <button className='px-6 py-2 border-2 hover:font-bold max-w-fit rounded-xl border-almost-black'>
            Learn more
          </button>
          <div className='flex gap-16 mt-20'>
            <DataBiz />
            <Audiophile />
            <Meet />
            <Maker />
          </div>
        </div>
        <div className='border-2 border-red-500 '>
          <Image
            width={860}
            height={1180}
            src={DesktopHero}
            alt='desktop-hero'
          />
        </div>
      </div>
    </main>
  );
}
