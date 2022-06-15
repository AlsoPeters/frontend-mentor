import Image from 'next/image';
import tonberry from '../public/pictures/tonberry.gif';

export default function Footer() {
  return (
    <footer>
      <p className='flex items-center justify-center gap-1 py-2'>
        Built by{' '}
        <span>
          <a
            className='font-bold text-blue-700 cursor-cell'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/AlsoPeters'
          >
            AlsoPeters
          </a>
        </span>
        <Image height={40} width={40} src={tonberry} alt='tonberry'></Image>
      </p>
    </footer>
  );
}
