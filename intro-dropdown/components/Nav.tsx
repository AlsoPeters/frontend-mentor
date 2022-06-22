import { useState } from 'react';

import Logo from '../public/photos/logo.svg';
import FeaturesDropdown from './FeaturesDropdown';
import CompanyDropdown from './CompanyDropdown';
import ArrowUp from '../public/photos/icon-arrow-up.svg';
import ArrowDown from '../public/photos/icon-arrow-down.svg';

import Menu from '../public/photos/icon-menu.svg';

export default function Nav(): JSX.Element {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  function menuHelper(e) {
    if (activeMenu === e.target.name) {
      return setActiveMenu(null);
    }
    return setActiveMenu(e.target.name);
  }

  return (
    <nav className='flex justify-between px-4 py-6'>
      <Logo />
      <Menu />
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

//     <div className='invisible xl:visible'>
//       <div className='flex items-center gap-2 '>
//         <button
//           onClick={menuHelper}
//           name='features'
//           className='hover:text-almost-black'
//         >
//           Features
//         </button>
//         {activeMenu === 'features' ? <ArrowUp /> : <ArrowDown />}
//       </div>
//       {activeMenu === 'features' ? <FeaturesDropdown /> : null}
//     </div>
//     <div className='invisible xl:visible '>
//       <div className='flex items-center gap-2'>
//         <button
//           onClick={menuHelper}
//           name='company'
//           className='hover:text-almost-black'
//         >
//           Company
//         </button>
//         {activeMenu === 'company' ? <ArrowUp /> : <ArrowDown />}
//       </div>
//       {activeMenu === 'company' ? <CompanyDropdown /> : null}
//     </div>
//     <button
//       onClick={menuHelper}
//       name='careers'
//       className='invisible hover:text-almost-black xl:visible'
//     >
//       Careers
//     </button>
//     <button
//       onClick={menuHelper}
//       name='about'
//       className='invisible hover:text-almost-black xl:visible'
//     >
//       About
//     </button>
//   </div>
//   <div className='flex gap-8 '>
//     <button
//       onClick={menuHelper}
//       name='login'
//       className='invisible hover:text-almost-black xl:visible'
//     >
//       Login
//     </button>
//     <button
//       onClick={menuHelper}
//       name='register'
//       className='invisible px-4 py-2 border-2 border-gray-400 xl:visible xl: hover:text-almost-black hover:border-almost-black rounded-2xl'
//     >
//       Register
//     </button>
//   </div>
// </div>
