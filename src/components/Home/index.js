import Banner from '@/components/Banner';
import Carousel from '@/components/Carousel';
import CategoryInfos from '@/components/CategoryInfos';
import HomeCategories from '@/components/Home/Categories';
import HomeProductsByCategory from '@/components/Home/ProductsByCategory';
import HomePromotions from '@/components/Home/Promotions';
import HomeRecurrentOrders from '@/components/Home/RecurrentOrders';
import HomeUserInfos from '@/components/Home/UserInfos';
import ProductsGrid from '../ProductsGrid';
import FinalBanners from './FinalBanners';
import ProductsJSON from '../../data/products.json';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <div className={'bg-[#F6F8FF] p-4 md:p-6'}>
        <HomeUserInfos />
        <Banner
          className='my-8 -mx-4 md:mx-0'
          deskImg={'https://i.imgur.com/MS29xcJ.png'}
          mobileImg={'https://i.imgur.com/LKFWNSV.png'}
        />
        <div className='flex flex-col-reverse lg:flex-row gap-6'>
          <HomeRecurrentOrders />
          <HomeCategories />
        </div>
        <HomeProductsByCategory className='my-6' />
        <CategoryInfos className='mb-6 -mx-4 md:mx-0' />
        <Carousel products={ProductsJSON} className='mb-6 hidden md:flex' />
        <ProductsGrid className='mb-6 grid md:hidden' />
        <HomePromotions />
        <Carousel
          title='Beers'
          products={ProductsJSON}
          className='my-6 hidden md:flex'
        />
        <Carousel
          title='Red Wines'
          products={ProductsJSON}
          className='my-6 hidden md:flex'
        />
        <Carousel
          title='Spirits'
          products={ProductsJSON}
          className='my-6 hidden md:flex'
        />
        <FinalBanners />
      </div>
    </main>
  );
}
