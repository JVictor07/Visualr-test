export default function Banner({ className, deskImg, mobileImg }) {
  return (
    <div className={'flex' + ' ' + className}>
      <img
        src={mobileImg}
        alt='Paramount Liquor'
        className={'w-full md:hidden'}
      />
      <img
        width='100'
        height='100'
        src={deskImg}
        alt='Paramount Liquor'
        className={'w-full hidden md:block'}
      />
    </div>
  );
}
