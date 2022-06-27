import Image from 'next/image';
import DataBiz from '../public/photos/client-databiz.svg';
import Audiophile from '../public/photos/client-audiophile.svg';
import Meet from '../public/photos/client-meet.svg';
import Maker from '../public/photos/client-maker.svg';

export default function Body() {
  return (
    <div className='h-full'>
      <div className='flex flex-col items-center w-full h-full py-8 border-2 border-pink-300 lg:py-20 lg:flex-row '>
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
        <div className='flex flex-col items-center justify-between w-full h-full border-2 border-green-400 lg:justify-between lg:items-start lg:m-20 lg:p-8 lg:w-1/2'>
          <p className='text-4xl font-bold lg:my-6 lg:pr-8 lg:text-8xl'>
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

        <div className='hidden lg:flex'>
          <Image
            width={960}
            height={1280}
            layout='intrinsic'
            src='/photos/image-hero-desktop.png'
            alt='desktop hero'
          />
        </div>
      </div>
    </div>
  );
}

// <main className='flex w-full h-full sm:bg-green-300 md:bg-slate-500 lg:bg-red-500 xl:bg-orange-500 2xl:bg-yellow-300'>
//   {/* */}

//   <div className='flex justify-between h-full 2xl:mx-32 2xl:my-20 2xl:justify-around 2xl:m-auto'>
//     <div className='flex flex-col justify-between'>
//       <div className='mt-16'>
//         <p className='font-bold text-7xl'>Make</p>
//         <p className='font-bold text-7xl'>remote work</p>
//       </div>

//       <p className='max-w-md text-lg text-gray-500'>
//         Get your team in sync, no matter your location. Streamline
//         processes, create team rituals, and watch productivity soar.
//       </p>

//       <button className='px-6 py-3 hover:bg-almost-white hover:text-almost-black bg-almost-black text-almost-white hover:font-bold max-w-fit rounded-xl border-almost-black'>
//         Learn more
//       </button>
//       <div>
//         <div className='flex items-center justify-between'>
//           <DataBiz />
//           <Audiophile />
//           <Meet />
//           <Maker />
//         </div>
//       </div>
//     </div>
//     <div>
//       <Image
//         width={960 / 2}
//         height={1280 / 2}
//         objectFit='fill'
//         src='/photos/image-hero-desktop.png'
//         alt='desktop-hero'
//       />
//     </div>
//   </div>
// </main>
