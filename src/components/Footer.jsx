import { Link } from 'react-router-dom'; // Correct import for Router
import emailIcon from '../assets/email.png';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import homeWhite from '../assets/homeWhite.svg'
import pictureWhite from '../assets/picture.svg';

export default function Footer() {
  return (
    <div className="z-50 bg-gray-400 rounded-[20px] w-[200px] flex p-2 items-center justify-center mx-auto sticky bottom-[50px]">
      <div className='gap-2 flex flex-row text-white'>
        <Link to="/" className="hover:underline"><img src={homeWhite} alt="Home" /></Link>
        <Link to="/portfolio" className="hover:underline"><img src={pictureWhite} alt="art" /></Link>
        |
        <img className="w-[29px] h-[29px]" src={emailIcon} alt="Email" />
        <img className="w-[27px] h-[27px]" src={githubIcon} alt="GitHub" />
        <img className="w-[29px] h-[29px]" src={linkedinIcon} alt="LinkedIn" />
        |
        dark mode light mode
      </div>
    </div>
  );
}