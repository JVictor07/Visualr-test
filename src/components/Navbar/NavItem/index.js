'use client'; // This is a client component 👈🏽
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { removeDuplicatesOnArray } from '@/utils/removeDuplicatesOnArray';
import { classNames } from '@/utils/classNames';

export default function NavItem({ name, icon, items = [] }) {
  const AllCategories = items.map(({ category }) => category);
  const NoDuplicatesCategories = removeDuplicatesOnArray(AllCategories);

  if (items?.length <= 0)
    return (
      <div>
        <a
          href='#'
          className='flex border-b border-b-[#F2F5FF] px-6 py-4 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 -mb-2 -mt-2'
        >
          {icon}
          <span className='font-medium text-[#3a486a] text-[14px]'>{name}</span>
        </a>
      </div>
    );

  return (
    <Disclosure as='div'>
      {({ open }) => (
        <>
          <Disclosure.Button className='-mt-2 w-full flex items-center justify-between rounded-lg px-6 py-4 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
            <div className='flex items-center'>
              {icon}
              <span className='font-medium text-[#3a486a] text-[14px]'>
                {name}
              </span>
            </div>
            <ChevronDownIcon
              color='#AEB6CB'
              aria-hidden='true'
              className={classNames(
                open ? 'rotate-180' : '',
                'h-5 w-5 flex-none'
              )}
            />
          </Disclosure.Button>
          {NoDuplicatesCategories.map((cat) => {
            const itemsOnThisCategory = items.filter(
              (item) => item.category === cat
            );
            return (
              <Disclosure.Panel key='cat' as='ul' className='mt-2 space-y-2'>
                {NoDuplicatesCategories.length > 1 && (
                  <span className='px-6 font-medium text-[#5A709D] text-[8px] uppercase'>
                    {cat}
                  </span>
                )}
                {itemsOnThisCategory.map((item) => (
                  <li key={item.name}>
                    <Disclosure.Button
                      as='a'
                      href={item.href}
                      className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      <div className='flex items-center'>
                        <item.icon
                          width={20}
                          className='mr-6'
                          color='#2765CE'
                        />
                        <span className='font-medium text-[#3A486A] text-[12px]'>
                          {item.name}
                        </span>
                      </div>
                    </Disclosure.Button>
                  </li>
                ))}
              </Disclosure.Panel>
            );
          })}
          <div
            className={classNames(
              open ? 'mt-4' : '',
              'border-b border-b-[#F2F5FF]'
            )}
          />
        </>
      )}
    </Disclosure>
  );
}
