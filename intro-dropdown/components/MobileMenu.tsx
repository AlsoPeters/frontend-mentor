import CloseMenu from '../public/photos/icon-close-menu.svg';
import ArrowUp from '../public/photos/icon-arrow-up.svg';
import ArrowDown from '../public/photos/icon-arrow-down.svg';
import MobileFeatureDropdown from './MobileFeatureDropdown';
import MobileCompanyDropdown from './MobileCompanyDropdown';

export default function MobileMenu() {
  return (
    <>
      <div className='absolute z-10 w-full h-full opacity-75 bg-almost-black'></div>
      <div className='absolute right-0 z-20 flex flex-col h-full px-6 py-6 bg-almost-white'>
        <CloseMenu className='self-end' />
        <div className='flex flex-col items-start gap-4 px-4 py-6'>
          <div className='flex flex-row items-center gap-4'>
            <button>Features</button>
            <ArrowDown />
          </div>

          <MobileFeatureDropdown />
          <div className='flex flex-row items-center gap-4'>
            <button>Company</button>
            <ArrowDown />
          </div>
          <MobileCompanyDropdown />
          <button>Careers</button>
          <button>About</button>
        </div>
        <button className='pb-4'>Login</button>
        <button className='px-12 py-2 border-2 rounded-xl border-almost-black'>
          Register
        </button>
      </div>
    </>
  );
}
