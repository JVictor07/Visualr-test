import MultipleItemsCard from '@/components/MultipleItemsCard';
import InvoicesIcon from '../../../assets/svgs/invoices.svg';

export default function HomeRecurrentOrders() {
  return (
    <div className='flex flex-col p-4 -mx-4 md:-mx-6 lg:mx-0 lg:p-10 bg-white shadow-[0px_1px_2px_0px_rgba(38,_37,_113,_0.04)] lg:rounded-lg min-w-[412px]'>
      <div className='flex justify-between mb-6 lg:mb-10 px-8 lg:px-0'>
        <div className='flex items-center'>
          <InvoicesIcon />
          <span className='ml-4 text-[14px] lg:text-[18px] font-medium text-[#3a486a]'>
            Recurrent orders
          </span>
        </div>
        <button className='text-xs font-medium text-[#2765ce] underline leading-[15.6px]'>
          Create new list
        </button>
      </div>
      <div className='flex gap-4 lg:gap-6'>
        <MultipleItemsCard />
        <MultipleItemsCard />
      </div>
    </div>
  );
}
