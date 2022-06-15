import Image from 'next/image';
import logo from '../public/pictures/logo.svg';

export default function Nav(): JSX.Element {
  return (
    <div className='flex items-center justify-between h-20 px-10 text-gray-500'>
      <div className='flex gap-8 border-2'>
        <div className='flex border-2'>
          <Image src={logo} alt='logo' />
        </div>
        <button>Features</button>
        <button>Company</button>
        <button>Careers</button>
        <button>About</button>
      </div>
      <div className='flex gap-8 '>
        <button>Login</button>
        <button className='px-4 py-2 border-2 border-gray-400 rounded-2xl'>
          Register
        </button>
      </div>
    </div>
  );
}
