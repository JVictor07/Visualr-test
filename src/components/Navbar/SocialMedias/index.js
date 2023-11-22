import YoutubeIcon from '../../../assets/svgs/youtube.svg';
import FacebookIcon from '../../../assets/svgs/facebook.svg';
import InstagramIcon from '../../../assets/svgs/instagram.svg';

export default function SocialMedias() {
  return (
    <div className='flex flex-col justify-center mt-auto pt-6'>
      <div className='inline-flex items-end justify-center gap-[18px] relative mb-4'>
        <FacebookIcon />
        <InstagramIcon />
        <YoutubeIcon />
      </div>
      <div className='flex justify-center'>
        <p className='font-normal text-[#404863] text-[9px]'>
          <span className='text-[#3a486a]'>
            © 2023 Paramount Liquor. Developed by{' '}
          </span>
          <span className='font-semibold text-[#3a486a]'>Visualr</span>
        </p>
      </div>
    </div>
  );
}
