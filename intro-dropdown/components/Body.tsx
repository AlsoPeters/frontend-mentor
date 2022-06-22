import Image from 'next/image';
import DataBiz from '../public/photos/client-databiz.svg';
import Audiophile from '../public/photos/client-audiophile.svg';
import Meet from '../public/photos/client-meet.svg';
import Maker from '../public/photos/client-maker.svg';

export default function Body() {
  return (
    <div className='h-full'>
      <Image
        width={750}
        height={564}
        objectFit='contain'
        src='/photos/image-hero-mobile.png'
        alt='mobile hero'
      />
      <div className='flex flex-col items-center h-full py-8'>
        <p className='text-4xl font-bold'>Make remote work</p>
        <p className='px-4 py-8 text-center text-gray-500'>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className='px-6 py-3 hover:bg-almost-white hover:text-almost-black bg-almost-black text-almost-white hover:font-bold max-w-fit rounded-xl border-almost-black'>
          Learn more
        </button>
        <div className='flex py-8 space-x-8 scale-75 justify-evenly'>
          <DataBiz />
          <Audiophile />
          <Meet />
          <Maker />
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
