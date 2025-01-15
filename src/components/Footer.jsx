import { Link } from 'react-router-dom'; // Correct import for Router

import homeWhite from '../assets/icons/home.svg';
import githubIcon from '../assets/icons/github.svg';
import emailIcon from '../assets/icons/email.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import sunIcon from '../assets/icons/sun.svg';
import moonIcon from '../assets/icons/moon.svg';
import paperIcon from '../assets/icons/paper.svg'

export default function Footer() {
  return (
    <div className='flex justify-center sticky bottom-[50px] z-50'>
      <div className="bg-white border-2 shadow-md rounded-[25px] p-2 gap-2 flex items-center hover:scale-110 transition-transform duration-300 ease-in-out">
        <LinkGroup iconSrc={homeWhite} alt="Home" link="/" />
        <LinkGroup iconSrc={paperIcon} alt="Art" link="/projects" />
        <div className="flex gap-2 border-l-2 border-r-2 pl-2 pr-2">
          <LinkGroup iconSrc={githubIcon} alt="GitHub" link="https://github.com/mirmirmirr" isExternal={true} />
          <LinkGroup iconSrc={linkedinIcon} alt="LinkedIn" link="https://www.linkedin.com/in/miranda-zheng-6b0895252/" isExternal={true} />
          <LinkGroup iconSrc={emailIcon} alt="Email" link="mailto:miranda.mzheng@gmail.com" isExternal={true} />
        </div>

          <div className="w-[35px] h-[35px] flex items-center justify-center rounded-full transition-transform duration-300 ease-in-out hover:bg-blue-100">
            <img
              src={sunIcon}
              className="w-[20px] h-[20px] transition-transform duration-300 group-hover:scale-110"
              alt="mode"
            />
          </div>

      </div>
    </div>
  );
}

function LinkGroup({ iconSrc, alt, link, isExternal = false }) {
  return (
    <div className='group relative'>
      {isExternal ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-[35px] h-[35px] flex items-center justify-center rounded-full transition-all duration-300 ease-in-out group-hover:bg-blue-100">
            <img
              src={iconSrc}
              className="w-[20px] h-[20px] transition-transform duration-300 group-hover:scale-110"
              alt={alt}
            />
          </div>
        </a>
      ) : (
        <Link to={link}>
          <div className="w-[35px] h-[35px] flex items-center justify-center rounded-full transition-all duration-300 ease-in-out group-hover:bg-blue-100">
            <img
              src={iconSrc}
              className="w-[20px] h-[20px] transition-transform duration-300 group-hover:scale-110"
              alt={alt}
            />
          </div>
        </Link>
      )}
      <span className="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-blue-100 bg-white py-2 text-[12px] shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 text-highlightBlue">{alt}</span>
    </div>
  )
}