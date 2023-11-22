'use client';
import Carousel from '@/components/Carousel';
import Tabs from '@/components/Tabs';
import ProductsJSON from '../../../data/products.json';

const categories = {
  Wine: ProductsJSON,
  Beers: ProductsJSON,
  ['Spirits']: ProductsJSON,
  ['The Drop']: ProductsJSON,
  [`What's new`]: ProductsJSON,
  ['Best sellers']: ProductsJSON,
};

export default function HomeProductsByCategory({ className }) {
  return (
    <div className={'flex flex-col items-center' + ' ' + className}>
      <Tabs tabs={Object.keys(categories)} className='mb-4 md:mb-6' />
      <Carousel products={categories.Beers} />
    </div>
  );
}
