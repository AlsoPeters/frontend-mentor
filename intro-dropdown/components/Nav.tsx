import Logo from '../public/photos/logo.svg';
import FeaturesDropdown from './FeaturesDropdown';
import CompanyDropdown from './CompanyDropdown';
import CloseMenu from '../public/photos/icon-close-menu.svg';
import Menu from '../public/photos/icon-menu.svg';
import ArrowUp from '../public/photos/icon-arrow-up.svg';
import ArrowDown from '../public/photos/icon-arrow-down.svg';

export default function Nav(): JSX.Element {
  return (
    <div className='flex items-center justify-between h-20 px-10 text-gray-500'>
      <div className='flex gap-10'>
        <div className='flex'>
          <Logo />
        </div>
        <div>
          <div className='flex items-center gap-2 '>
            <button className='hover:text-almost-black'>Features</button>
            <ArrowUp />
          </div>
          <FeaturesDropdown />
        </div>
        <div>
          <div className='flex items-center gap-2'>
            <button className='hover:text-almost-black'>Company</button>
            <ArrowUp />
          </div>
          <CompanyDropdown />
        </div>
        <button className='hover:text-almost-black'>Careers</button>
        <button className='hover:text-almost-black'>About</button>
      </div>
      <div className='flex gap-8 '>
        <button className='hover:text-almost-black'>Login</button>
        <button className='px-4 py-2 border-2 border-gray-400 hover:text-almost-black hover:border-almost-black rounded-2xl'>
          Register
        </button>
      </div>
    </div>
  );
}
