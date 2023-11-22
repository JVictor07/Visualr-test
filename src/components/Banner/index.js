/* For this component, I imagined that the page would be managed
* through some CMS, so it makes more sense to leave it as a fixed image
* so that the people who will manage the page can edit it more easily */

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
