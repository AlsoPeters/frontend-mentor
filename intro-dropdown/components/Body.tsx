import Image from 'next/image';
import DesktopHero from '../public/photos/image-hero-desktop.png';
import DataBiz from '../public/photos/client-databiz.svg';
import Audiophile from '../public/photos/client-audiophile.svg';
import Meet from '../public/photos/client-meet.svg';
import Maker from '../public/photos/client-maker.svg';

export default function Body() {
  return (
    <main className='grid h-full grid-cols-2'>
      <div className='col-start-1 px-20 pt-20 pb-20'>
        <div className='flex flex-col justify-between h-full'>
          <div className='mt-20'>
            <p className='font-bold text-7xl'>Make</p>
            <p className='font-bold text-7xl'>remote work</p>

            <p className='max-w-md text-lg text-gray-500 mt-14'>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>

            <button className='px-6 py-3 mt-16 border-2 hover:bg-almost-white hover:text-almost-black bg-almost-black text-almost-white hover:font-bold max-w-fit rounded-xl border-almost-black'>
              Learn more
            </button>
          </div>
          <div className='flex items-center justify-between'>
            <DataBiz />
            <Audiophile />
            <Meet />
            <Maker />
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center w-full h-full col-start-2'>
        <Image
          width={960 / 2.3}
          height={1280 / 2.3}
          src={DesktopHero}
          alt='desktop-hero'
        />
      </div>
    </main>
  );
}
