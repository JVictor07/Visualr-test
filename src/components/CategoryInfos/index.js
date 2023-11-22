import Button from '../Button';

export default function CategoryInfos({ className }) {
  return (
    <div
      className={
        'flex flex-col md:flex-row bg-white rounded-[8px] shadow-[0px_1px_2px_#2625710a]' +
        ' ' +
        className
      }
    >
      <div className='w-full md:w-1/2 flex'>
        <img
          width='120'
          height='120'
          alt='black chair and white table'
          src={'https://i.imgur.com/js02ahf.png'}
          className='object-cover object-center w-full max-h-[400px]'
        />
      </div>
      <div className='w-full md:w-1/2 flex flex-col p-10 lg:p-20 my-auto'>
        <h2 className='font-medium text-[#2765ce] text-[18px] lg:text-[32px] mb-4 lg:mb-6'>
          Legend Untold
        </h2>
        <p className='text-[#3a486a] text-[12px] lg:text-[14px] mb-6 lg:mb-10'>
          The ‘Legends Untold’ is a premium collection of 8 rare and collectible
          single malt whiskies that push the boundaries of flavour. Totally
          unique, these whiskies have been blended and finished especially for
          this collection.
        </p>
        <Button small text='View Collection' />
      </div>
    </div>
  );
}
