import Image from 'next/image';
import DataBiz from '../public/photos/client-databiz.svg';
import Audiophile from '../public/photos/client-audiophile.svg';
import Meet from '../public/photos/client-meet.svg';
import Maker from '../public/photos/client-maker.svg';
import desktopHero from '../public/photos/image-hero-desktop.png';

export default function Body() {
  return (
    <div className='h-full'>
      <div className='flex flex-col items-center w-full h-full py-8 lg:flex-row '>
        <div className='lg:hidden'>
          <Image
            width={750}
            height={564}
            className=''
            objectFit='contain'
            src='/photos/image-hero-mobile.png'
            alt='mobile hero'
          />
        </div>
        <div className='flex flex-col items-center justify-between w-full h-full lg:justify-between lg:items-start lg:m-20 lg:p-8 lg:w-1/2'>
          <p className='pt-8 text-4xl font-bold lg:my-6 lg:pr-8 lg:text-8xl'>
            Make remote work
          </p>
          <p className='px-4 py-8 text-center text-gray-500 lg:text-xl lg:max-w-lg lg:px-0 lg:py-0 lg:text-left'>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className='px-6 py-3 lg:text-2xl lg:py-4 hover:bg-almost-white hover:text-almost-black bg-almost-black text-almost-white hover:font-bold max-w-fit rounded-xl border-almost-black'>
            Learn more
          </button>
          <div className='flex items-center py-8 space-x-8 scale-75 lg:scale-100 lg:justify-around lg:w-full justify-evenly'>
            <DataBiz />
            <Audiophile />
            <Meet />
            <Maker />
          </div>
        </div>

        <div className='hidden lg:max-h-fit lg:flex'>
          <Image
            width={960 / 2}
            height={1280 / 2}
            layout='intrinsic'
            objectFit='scale-down'
            src={desktopHero}
            alt='desktop hero'
          />
        </div>
      </div>
    </div>
  );
}
