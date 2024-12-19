import { Link } from 'react-router-dom'; // Correct import for Router
import emailIcon from '../assets/email.png';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';

export default function Header() {
  return (
    <div className="m-[30px]">
      <div className="w-[663px] h-[49px] absolute rounded-[10px] border border-black flex items-center px-4">
        <div className="text-black text-[15px] font-normal font-['Poppins'] space-x-2">
          <Link to="/" className="hover:underline">Miranda Zheng</Link> /
          <Link to="/projects" className="hover:underline">Projects</Link> /
          <Link to="/portfolio" className="hover:underline">Portfolio</Link> /
          <Link to="/resume" className="hover:underline">Resume</Link> /
          <Link to="/about" className="hover:underline">About me!</Link>
        </div>
      </div>
      <div className="flex gap-4 absolute right-[30px]">
        <img className="w-[29px] h-[29px]" src={emailIcon} alt="Email" />
        <img className="w-[27px] h-[27px]" src={githubIcon} alt="GitHub" />
        <img className="w-[29px] h-[29px]" src={linkedinIcon} alt="LinkedIn" />
      </div>
    </div>
  );
}