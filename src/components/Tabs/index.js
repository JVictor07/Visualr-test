import { classNames } from '@/utils/classNames';
import { Tab } from '@headlessui/react';

export default function Tabs({ tabs, className }) {
  return (
    <Tab.Group className={className}>
      <Tab.List className='flex space-x-1 rounded-xl bg-white p-1 border border-[#dee6ff] overflow-y-auto max-w-[264px] md:max-w-full'>
        {tabs.map((category) => (
          <Tab
            key={category}
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-[12px] font-medium leading-5 p-3 whitespace-nowrap',
                'focus:outline-none focus:ring-2',
                selected
                  ? 'border-[#2765ce] bg-[#2765ce] text-white'
                  : 'text-[#5a709d] hover:bg-[#2765ce]/[0.12]'
              )
            }
          >
            {category}
          </Tab>
        ))}
      </Tab.List>
    </Tab.Group>
  );
}
