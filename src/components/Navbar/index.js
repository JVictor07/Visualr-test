'use client'; // This is a client component 👈🏽
import NavItem from './NavItem';
import { Dialog } from '@headlessui/react';
import { products, orders, account } from './consts';
import HomeIcon from '../../assets/svgs/home.svg';
import OrdersIcon from '../../assets/svgs/orders.svg';
import AccountIcon from '../../assets/svgs/settings.svg';
import ProductIcon from '../../assets/svgs/products.svg';
import RewardsIcon from '../../assets/svgs/evolution-rewards.svg';
import SocialMedias from './SocialMedias';
import { isOpenNavbarAtom } from '@/store';
import { useAtom } from 'jotai';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpenNavbar, setIsOpenNavbar] = useAtom(isOpenNavbarAtom);
  return (
    <Dialog as='div' open={isOpenNavbar} onClose={setIsOpenNavbar}>
      <Dialog.Panel className='inset-y-0 flex flex-col fixed top-0 md:top-[64px] left-0 z-10 w-full md:w-[260px] overflow-y-auto bg-white py-6 sm:max-w-sm'>
        <button
          type='button'
          className='flex md:hidden ml-auto mr-6'
          onClick={() => setIsOpenNavbar(false)}
        >
          <XMarkIcon className='h-6 w-6' color='#2765CE' />
        </button>
        <div className='mt-6 flow-root'>
          <div className='-my-6 divide-y divide-gray-500/10'>
            <div className='space-y-2 py-6'>
              <NavItem
                icon={<HomeIcon width={24} className='mr-6' />}
                name='Home'
              />
              <NavItem
                icon={<ProductIcon width={24} className='mr-6' />}
                items={products}
                name='Products'
              />
              <NavItem
                icon={<OrdersIcon width={24} className='mr-6' />}
                items={orders}
                name='Orders'
              />
              <NavItem
                icon={<AccountIcon width={24} className='mr-6' />}
                items={account}
                name='Account'
              />
              <NavItem
                icon={<RewardsIcon width={24} className='mr-6' />}
                name='Rewards'
              />
            </div>
          </div>
        </div>
        <SocialMedias />
      </Dialog.Panel>
    </Dialog>
  );
}
