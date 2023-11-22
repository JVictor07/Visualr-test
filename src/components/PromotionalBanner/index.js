import Button from '../Button';

export default function PromotionalBanner({ name, description, img }) {
  return (
    <div className='relative max-h-[350px]'>
      <div className='z-10 absolute top-0 bottom-0 bg-[linear-gradient(90deg,_rgba(0,_0,_0,_0.9)_3%,rgba(0,_0,_0,_0)_100%)] w-full h-full'></div>
      <img src={img} alt={name} className='w-full object-cover max-h-[350px]' />
      <div className='z-20 flex flex-col gap-2 w-5/6 absolute top-[85px] left-[35px]'>
        <div className='text-[32px] font-semibold leading-[32px] text-white w-full'>
          {name}
        </div>
        <div className='text-[10px] font-semibold leading-[18px] text-white'>
          {description}
        </div>
        <Button className='mt-6 text-white' text='Shop now' />
      </div>
    </div>
  );
}
