import CloseMenu from '../public/photos/icon-close-menu.svg';
import ArrowUp from '../public/photos/icon-arrow-up.svg';
import ArrowDown from '../public/photos/icon-arrow-down.svg';
import MobileFeatureDropdown from './MobileFeatureDropdown';
import MobileCompanyDropdown from './MobileCompanyDropdown';
import { useState } from 'react';

export default function MobileMenu(props) {
  const [featuresActive, setFeaturesActive] = useState(false);
  const [companyActive, setCompanyActive] = useState(false);

  function menuHelper(e) {
    if (e.target.name === 'features') {
      return setFeaturesActive(!featuresActive);
    }
    if (e.target.name === 'company') {
      return setCompanyActive(!companyActive);
    }
  }
  return (
    <div className=''>
      <div className='absolute z-10 w-full h-full opacity-75 bg-almost-black'></div>
      <div className='absolute right-0 z-20 flex flex-col h-full px-10 py-6 bg-almost-white'>
        <CloseMenu onClick={props.handleMenu} className='self-end' />
        <div className='flex flex-col items-start gap-4 px-4 py-6'>
          <div className='flex flex-row items-center gap-4'>
            <button onClick={menuHelper} name='features'>
              Features
            </button>
            {featuresActive ? <ArrowUp /> : <ArrowDown />}
          </div>
          {featuresActive ? <MobileFeatureDropdown /> : null}
          <div className='flex flex-row items-center gap-4'>
            <button onClick={menuHelper} name='company'>
              Company
            </button>

            {companyActive ? <ArrowUp /> : <ArrowDown />}
          </div>

          {companyActive ? <MobileCompanyDropdown /> : null}
          <button>Careers</button>
          <button>About</button>
        </div>
        <button className='pb-4'>Login</button>
        <button className='px-12 py-2 border-2 rounded-xl border-almost-black'>
          Register
        </button>
      </div>
    </div>
  );
}
