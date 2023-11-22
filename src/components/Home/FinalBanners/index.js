import Button from '@/components/Button';
import { classNames } from '@/utils/classNames';

const banners = [
  {
    name: 'Loyalty Box',
    deskImg: 'https://i.imgur.com/m5HIpuh.png',
    mobileImg: 'https://i.imgur.com/m5HIpuh.png',
  },
  {
    name: 'Spring Promotion',
    deskImg: 'https://i.imgur.com/bC3s8P8.png',
    mobileImg: 'https://i.imgur.com/bC3s8P8.png',
  },
];

export default function FinalBanners({ className }) {
  return (
    <div className={'mt-6 flex flex-col md:flex-row gap-4' + ' ' + className}>
      <div className='min-h-[250px] d-flex relative w-full overflow-hidden'>
        <img
          alt={banners[0].name}
          src={banners[0].deskImg}
          className={classNames(
            'min-h-[250px] max-h-[250px] h-full object-cover w-full'
          )}
        />

        <img
          src='https://i.imgur.com/IHTUkpz.png'
          className='absolute top-0 left-0 z-10 w-[278px]'
        />

        <div className='flex flex-col absolute top-[50px] left-[40px] z-10 max-w-[175px]'>
          <span className='text-[32px] font-semibold text-white leading-[32px]'>
            Loyalty Box
          </span>
          <span className='text-[10px] font-semibold text-white mb-6'>
            Special gifts and offers for you.
          </span>
          <Button className='text-white' text='Read more'></Button>
        </div>
      </div>

      <div className='min-h-[250px] d-flex w-full md:w-[330px] md:min-w-[330px] relative overflow-hidden'>
        <img
          alt={banners[1].name}
          src={banners[1].deskImg}
          className={classNames(
            'min-h-[250px] max-h-[250px] h-full w-full object-cover'
          )}
        />
        <img
          src='https://i.imgur.com/SdwySJf.png'
          className='absolute top-0 left-0 z-10 w-[278px]'
        />

        <div className='flex flex-col absolute top-[50px] left-[40px] z-10 max-w-[238px]'>
          <span className='text-[32px] font-semibold text-white leading-[32px]'>
            Spring Promotion
          </span>
          <span className='text-[10px] font-semibold text-white mb-6'>
            Save up 40% on selected products.
          </span>
          <Button className='text-white' text='View promotion'></Button>
        </div>
      </div>
    </div>
  );
}
