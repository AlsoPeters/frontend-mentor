import Image from 'next/image';
import DesktopHero from '../public/photos/image-hero-desktop.png';

export default function Body() {
  return (
    <main className='flex-grow bg-slate-400'>
      <div className='flex mx-10'>
        <div className=''>
          <h1 className='text-6xl font-bold border-2'>Make remote work</h1>
        </div>
        <div className='flex-1 border-2 border-red-500'>
          <Image src={DesktopHero} alt='desktop-hero' />
        </div>
      </div>
    </main>
  );
}
