import PromotionalBanner from '@/components/PromotionalBanner';

export default function HomePromotions() {
  const promotions = [
    {
      id: 1,
      name: 'Whiskey & Bourbon',
      image: 'https://i.imgur.com/TYs0OPW.png',
      description: 'Save up 40% on selected products.',
    },
    {
      id: 2,
      name: 'Whiskey & Bourbon',
      image: 'https://i.imgur.com/xDD4DbO.png',
      description: 'Save up 40% on selected products.',
    },
    {
      id: 3,
      name: 'Champagne & Sparkling',
      image: 'https://i.imgur.com/J7uiicE.png',
      description: 'Save up 60% on selected products.',
    },
  ];

  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
      {promotions.map((promotion) => (
        <PromotionalBanner
          key={promotion.id}
          name={promotion.name}
          img={promotion.image}
          description={promotion.description}
        />
      ))}
    </div>
  );
}
