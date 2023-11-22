const categories = [
  {
    id: 1,
    name: 'Beer',
    productsQtd: 3596,
    color: '#888140',
    img: 'https://i.imgur.com/rraw3N5.png',
  },
  {
    id: 2,
    name: 'Craf Beer',
    productsQtd: 2106,
    color: '#A98751',
    img: 'https://i.imgur.com/wRNY6M8.png',
  },
  {
    id: 3,
    name: 'Red Wine',
    productsQtd: 1498,
    color: '#A91C2D',
    img: 'https://i.imgur.com/qp29IQZ.png',
  },
  {
    id: 4,
    name: 'White Wine',
    productsQtd: 1741,
    color: '#5ED1EB',
    img: 'https://i.imgur.com/J2BvN8l.png',
  },
  {
    id: 5,
    name: 'Cider',
    productsQtd: 784,
    color: '#3DBFDF',
    img: 'https://i.imgur.com/ZoDrkMf.png',
  },
  {
    id: 6,
    name: 'Spirits',
    productsQtd: 1258,
    color: '#905123',
    img: 'https://i.imgur.com/0NiyjAD.png',
  },
  {
    id: 7,
    name: 'Whiskey & Bourbon',
    productsQtd: 928,
    color: '#AA4328',
    img: 'https://i.imgur.com/0NiyjAD.png',
  },
  {
    id: 8,
    name: 'Champagne & Sparkling',
    productsQtd: 632,
    color: '#806EC4',
    img: 'https://i.imgur.com/J2BvN8l.png',
  },
  {
    id: 9,
    name: 'Cocktails',
    productsQtd: 784,
    color: '#AAA83F',
    img: 'https://i.imgur.com/PiPsIP3.png',
  },
  {
    id: 10,
    name: 'Premix',
    productsQtd: 33,
    color: '#9C4D4D',
    img: 'https://i.imgur.com/nHaBz19.png',
  },
  {
    id: 11,
    name: 'Non-Alcoholic',
    productsQtd: 1202,
    color: '#D7790E',
    img: 'https://i.imgur.com/VMRx0W4.png',
  },
  {
    id: 12,
    name: 'Other',
    productsQtd: 146,
    color: '#59448C',
    img: 'https://i.imgur.com/2tZS7gW.png',
  },
];

export default function HomeCategories() {
  return (
    <div className='grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 w-full'>
      {categories.map((cat) => {
        return (
          <div
            key={cat.id}
            className='relative w-full overflow-hidden flex flex-row items-start rounded'
          >
            <img
              src={cat.img}
              alt={cat.name}
              className='z-1 object-cover h-full w-full'
            />
            <div
              style={{
                backgroundImage: `linear-gradient(to right, ${cat.color}, #000)`,
              }}
              className={`z-10 opacity-60 absolute w-full h-full top-0 left-0`}
            ></div>
            <div className='z-10 absolute flex flex-col p-3 md:p-4 bottom-0'>
              <div className='font-semibold leading-[20px] text-white'>
                {cat.name}
              </div>
              <div className='text-xs font-semibold leading-[18px] text-white'>
                {cat.productsQtd} <span className='font-medium'>products</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
