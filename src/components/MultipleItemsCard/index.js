import { Button } from '@headlessui/react';

export default function MultipleItemsCard({ className }) {
  return (
    <div className='flex flex-row w-full items-start'>
      <div className='border-solid border-[#dee6ff] bg-white flex flex-col justify-between gap-4 w-full items-start p-4 border rounded-lg'>
        <div className='flex flex-col items-start'>
          <div className='text-sm font-medium leading-[18.2px] text-[#3a486a]'>
            Weekly Refills
          </div>
          <div className='text-[8px] font-medium leading-[10.4px] text-[#5a709d]'>
            Last purchased <span className='font-semibold'>6 days ago</span>
          </div>
        </div>
        <div className='flex flex-col ml-3 gap-2 w-4/5 items-start'>
          <div className='flex flex-row gap-2 w-full items-start'>
            <img
              alt='Beer'
              className='w-12'
              src='https://file.rendit.io/n/zkHe6yP40CcHvFLurmOB.png'
            />
            <img
              alt='Red Bull'
              className='w-12'
              src='https://file.rendit.io/n/KhkL2mdUmPIu8rLT7Xxz.png'
            />
          </div>
          <div className='flex flex-row gap-4 w-24 items-start'>
            <img
              className='w-12'
              alt='Great Norther'
              src='https://file.rendit.io/n/x50SWqv3bqVFwiJ5IWjw.png'
            />
            <div className='text-center text-xs font-medium leading-[14.3px] text-[#3a486a] bg-[#f6f8ff] flex mt-2 w-8 h-8 items-center justify-center rounded-[148px]'>
              <span>+22</span>
            </div>
          </div>
        </div>
        <button className='text-center text-xs font-medium leading-[15.6px] text-[#3a486a] border-solid border-[#dee6ff] bg-white flex flex-row justify-center pt-3 w-20 h-10 cursor-pointer items-start border rounded-lg'>
          Buy again
        </button>
      </div>
    </div>
  );
}
