import Image from 'next/image';
import DesktopBanner from '../../../../public/bar-brand.png';
import InformationalCard from '../../InformationalCard';
import InvoicesIcon from '../../../assets/svgs/invoices.svg';
import OrdersIcon from '../../../assets/svgs/orders.svg';
import RewardsIcon from '../../../assets/svgs/evolution-rewards.svg';

export default function HomeUserInfos({ className }) {
  return (
    <div
      className={
        'flex flex-col lg:flex-row justify-between lg:items-center gap-4' +
        ' ' +
        className
      }
    >
      <div className='flex items-center md:mb-0'>
        <Image
          width={'80'}
          height={'80'}
          src={DesktopBanner}
          alt='Paramount Liquor'
          className='inline-block lg:h-20 lg:w-20 h-10 w-10 rounded-full ring-2 ring-white'
        />
        <div className='ml-4 text-[#3a486a] flex flex-col'>
          <span className='font-medium text-[10px] lg:text-[14px]'>Hello,</span>
          <span className='font-semibold text-[14px] lg:text-[18px]'>
            Bar Bambi
          </span>
        </div>
      </div>

      <div className='flex md:gap-6 gap-4 flex-wrap'>
        <InformationalCard
          title='Invoices'
          value='$1,360.93'
          buttonText='Pay now'
          icon={<InvoicesIcon size={16} height={16} width={16} />}
          className='grow md:grow-0'
          subtitle='Payment pending:'
        />
        <InformationalCard
          value='Shipped'
          title='Active Orders'
          icon={
            <OrdersIcon size={16} height={16} width={16} viewBox='0 0 16 16' />
          }
          buttonText='Track order'
          className='grow md:grow-0'
          subtitle='Order #26540891:'
        />
        <InformationalCard
          value='164,353'
          icon={
            <RewardsIcon size={16} height={16} width={16} viewBox='0 0 16 16' />
          }
          buttonText='View offers'
          title='Evolution Rewards'
          className='w-screen md:w-fit'
          subtitle='Redeemable Points:'
        />
      </div>
    </div>
  );
}
