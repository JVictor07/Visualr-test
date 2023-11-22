'use client';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ArrowLeftIcon from '../../assets/svgs/arrow-left.svg';
import ArrowRightIcon from '../../assets/svgs/arrow-right.svg';
import ProductCard from '../ProductCard';

export default function ProductsCarousel({ className, title, products }) {
  if (products?.length <= 0) return null;

  return (
    <div className={'flex w-full flex-col' + ' ' + className}>
      {title && (
        <div className='flex justify-between mb-6'>
          <span className='text-[18px] font-medium text-[#3A486A]'>
            {title}
          </span>
          <button type='button'>
            <span className='text-[12px] underline font-medium text-[#2765ce]'>
              View all
            </span>
          </button>
        </div>
      )}
      <CarouselProvider
        className='lg:block w-full px-6 md:px-14 relative'
        naturalSlideWidth={188}
        isIntrinsicHeight={true}
        infinite={false}
        totalSlides={products?.length}
        step={1}
      >
        <div className='w-full flex items-center justify-center'>
          <ButtonBack
            role='button'
            aria-label='slide backward'
            className='absolute z-30 left-0 ml-2 md:ml-6 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer'
            id='prev'
          >
            <ArrowLeftIcon />
          </ButtonBack>
          <div className='w-full h-full mx-auto overflow-x-hidden overflow-y-hidden'>
            <Slider>
              <div
                id='slider'
                className='h-full flex gap-2 md:gap-6 items-center justify-start transition ease-out duration-700'
              >
                {products?.map((product, index) => (
                  <Slide key={product.id} index={index}>
                    <ProductCard
                      product={product}
                      className='w-[120px] md:w-[188px]'
                    />
                  </Slide>
                ))}
              </div>
            </Slider>
          </div>
          <ButtonNext
            role='button'
            aria-label='slide forward'
            className='absolute z-30 right-0 mr-2 md:mr-6 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400'
            id='next'
          >
            <ArrowRightIcon />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
}
