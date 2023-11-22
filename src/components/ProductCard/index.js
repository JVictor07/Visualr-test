import { formatMoney } from '@/utils/formatMoney';

export default function ProductCard({ className, product }) {
  const { name, img, casePrice, unitPrice } = product;
  return (
    <div
      className={
        'bg-white flex flex-col flex-shrink-0 relative p-2 md:px-6 md:py-6 group md:h-[296px] md:max-h-[296px]' +
        ' ' +
        className
      }
    >
      <img
        width='120'
        height='120'
        src={img}
        alt='black chair and white table'
        className='object-contain object-center w-full group-hover:max-h-[115px]'
      />
      <div className='mt-6 flex flex-col items-center w-full h-full'>
        <h2 className='font-medium text-[#3a486a] text-center text-[12px] mb-1 md:mb-4 line-clamp-2'>
          {name}
        </h2>
        <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
          {casePrice && (
            <div className='flex flex-col items-center'>
              <span className='font-medium text-[#5a709d] text-[10px]'>
                Case Price
              </span>
              <span className='font-semibold text-[#3a486a] text-[14px]'>
                {formatMoney(casePrice)}
              </span>
            </div>
          )}
          {unitPrice && (
            <div className='flex flex-col items-center'>
              <span className='font-medium text-[#5a709d] text-[10px]'>
                Unit Price
              </span>
              <span className='font-semibold text-[#3a486a] text-[14px]'>
                {formatMoney(unitPrice)}
              </span>
            </div>
          )}
        </div>
      </div>
      <button
        type='button'
        className='border border-[#dee6ff] bg-transparent flex rounded-md text-[10px] font-medium text-[#3a486a] justify-center p-1 mt-2 hidden md:group-hover:block'
      >
        Quick buy
      </button>
    </div>
  );
}
