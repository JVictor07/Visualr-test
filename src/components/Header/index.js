'use client'; // This is a client component 👈🏽
import Image from 'next/image';
import Brand from '../../../public/brand.png';
import MenuIcon from '../../assets/svgs/menu.svg';
import CartIcon from '../../assets/svgs/cart.svg';
import UserIcon from '../../assets/svgs/user.svg';
import SearchIcon from '../../assets/svgs/search.svg';
import NotificationIcon from '../../assets/svgs/notification.svg';
import { isOpenNavbarAtom } from '@/store';
import { useAtom } from 'jotai';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isOpenNavbar, setIsOpenNavbar] = useAtom(isOpenNavbarAtom);

  return (
    <>
      <header className='flex items-center md:hidden bg-white h-[56px]'>
        <nav
          className='w-full flex items-center justify-between px-4'
          aria-label='Global'
        >
          <div className='flex'>
            <button
              type='button'
              className='p-2 pl-0 inline-flex items-center justify-center text-gray-700'
              onClick={() => setIsOpenNavbar((prevState) => !prevState)}
            >
              <span className='sr-only'>Open main menu</span>
              <MenuIcon className='h-6 w-6' aria-hidden='true' />
            </button>
            <button type='submit' className='p-2'>
              <SearchIcon />
            </button>
          </div>
          <div className='flex'>
            <a href='#'>
              <span className='sr-only'>Your Company</span>
              <Image src={Brand} alt='Paramount Liquor' />
            </a>
          </div>
          <div className='flex gap-4'>
            <button type='button'>
              <NotificationIcon />
            </button>
            <button type='button' className='flex relative'>
              <CartIcon />
              <span className='absolute -top-2 -right-2 bg-[#f8dc3a] w-4 rounded-lg text-xs font-medium text-black/88'>
                5
              </span>
            </button>
          </div>
        </nav>
      </header>

      <header className='hidden md:flex bg-white items-center h-[64px]'>
        <nav
          className='flex max-w-7xl items-center justify-between p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex'>
            <button
              type='button'
              className='-m-2.5 mr-4 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setIsOpenNavbar((prevState) => !prevState)}
            >
              <span className='sr-only'>Open main menu</span>
              {isOpenNavbar ? (
                <XMarkIcon className='h-6 w-6' color='#2765CE' />
              ) : (
                <MenuIcon className='h-6 w-6' aria-hidden='true' />
              )}
            </button>
          </div>
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <Image src={Brand} alt='Paramount Liquor' />
            </a>
          </div>
        </nav>
        <form className='flex items-center border-solid border-[#dee6ff] bg-white flex flex-row justify-between w-[424px] h-10 items-start py-3 px-3 border rounded-lg'>
          <input
            type='search'
            id='search'
            className='w-full text-[14px]'
            placeholder='Search by brand, product or ID'
            required
          />
          <button type='submit'>
            <SearchIcon />
          </button>
        </form>
        <div className='flex gap-4 ml-auto mr-4'>
          <button type='button'>
            <NotificationIcon />
          </button>
          <button type='button' className='flex relative'>
            <CartIcon />
            <span className='absolute -top-2 -right-2 bg-[#f8dc3a] w-4 rounded-lg text-xs font-medium text-black/88'>
              5
            </span>
          </button>
          <button type='button'>
            <UserIcon />
          </button>
        </div>
      </header>
    </>
  );
}
