import InvoicesIcon from '../../assets/svgs/invoices.svg';
import Button from '../Button';

export default function InformationalCard({
  icon,
  title,
  subtitle,
  value,
  buttonText,
  className,
}) {
  return (
    <div
      className={
        'p-4 flex flex-col bg-white rounded-[8px] shadow-[0px_1px_2px_#2625710a]' +
        ` ${className}`
      }
    >
      <div className='flex'>
        {icon}
        <div className='ml-2 font-medium text-[#3a486a] text-[14px] tracking-[0] leading-[normal]'>
          {title}
        </div>
      </div>
      <div className='mt-6 mb-2 flex items-center gap-[4px]'>
        <div className='w-fit font-medium text-[#3a486a] text-[10px] tracking-[0] leading-[15px] whitespace-nowrap'>
          {subtitle}
        </div>
        <div className='w-fit mt-[-1.00px] font-semibold text-[#3a486a] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap'>
          {value}
        </div>
      </div>
      <Button small text={buttonText} />
    </div>
  );
}
