import { useState } from 'react';

import Logo from '../public/photos/logo.svg';
import FeaturesDropdown from './FeaturesDropdown';
import CompanyDropdown from './CompanyDropdown';
import ArrowUp from '../public/photos/icon-arrow-up.svg';
import ArrowDown from '../public/photos/icon-arrow-down.svg';

import Menu from '../public/photos/icon-menu.svg';

export default function Nav(props): JSX.Element {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  function menuHelper(e) {
    if (activeMenu === e.target.name) {
      return setActiveMenu(null);
    }
    return setActiveMenu(e.target.name);
  }

  return (
    <nav className='flex gap-4 px-4 py-6'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center gap-10'>
          <div>
            <Logo />
          </div>
          <div className='hidden gap-10 lg:flex'>
            <div className='flex items-center gap-2 '>
              <button
                onClick={menuHelper}
                name='features'
                className='hover:text-almost-black'
              >
                Features
              </button>
              {activeMenu === 'features' ? <ArrowUp /> : <ArrowDown />}
            </div>
            {activeMenu === 'features' ? <FeaturesDropdown /> : null}

            <div className='flex items-center gap-2'>
              <button
                onClick={menuHelper}
                name='company'
                className='hover:text-almost-black'
              >
                Company
              </button>
              {activeMenu === 'company' ? <ArrowUp /> : <ArrowDown />}
            </div>
            {activeMenu === 'company' ? <CompanyDropdown /> : null}
            <button
              onClick={menuHelper}
              name='careers'
              className='hover:text-almost-black'
            >
              Careers
            </button>
            <button
              onClick={menuHelper}
              name='about'
              className='hover:text-almost-black'
            >
              About
            </button>
          </div>
        </div>

        <div className='flex invisible gap-10 lg:visible '>
          <button
            onClick={menuHelper}
            name='login'
            className='hover:text-almost-black'
          >
            Login
          </button>

          <button
            onClick={menuHelper}
            name='register'
            className='px-4 py-2 border-2 border-gray-400 hover:text-almost-black hover:border-almost-black rounded-2xl'
          >
            Register
          </button>
        </div>
      </div>

      <div className='flex items-center lg:hidden'>
        <Menu onClick={props.handleMenu} />
      </div>
    </nav>
  );
}

// <div className='flex items-center w-full h-20 px-10 text-gray-500 xl:justify-between'>
//   <div className='flex justify-between gap-10'>
//     <div className='flex'>
//       <div>
//         <Logo />
//       </div>
//       <Menu />
//     </div>

//     {/* Start Desktop layout */}

//   </div>
//   <div className='flex gap-8 '>
//   </div>
// </div>
