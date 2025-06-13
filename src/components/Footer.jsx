import useTheme from './useTheme';
import { Link } from 'react-router-dom';

import homeWhite from '/icons/home.svg';
import githubIcon from '/icons/github.svg';
import emailIcon from '/icons/email.svg';
import linkedinIcon from '/icons/linkedin.svg';
import sunIcon from '/icons/sun.svg';
import moonIcon from '/icons/moon.svg';
import paperIcon from '/icons/paper.svg';
import faceIcon from '/icons/face.svg';

export default function Footer() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className='fixed bottom-[50px] left-1/2 transform -translate-x-1/2 z-50'>
      <div className="bg-background-light dark:bg-background-dark border-2 shadow-md shadow-blue-200 dark:shadow-highlight-blue rounded-[25px] p-2 gap-2 flex items-center hover:scale-110 transition-transform duration-300 ease-in-out">
        <LinkGroup iconSrc={homeWhite} alt="Home" link="/" />
        <LinkGroup iconSrc={paperIcon} alt="Creative Work" link="/portfolio" />
        <LinkGroup iconSrc={faceIcon} alt="About" link="/about" />
        <div className="flex gap-2 border-l-2 border-r-2 pl-2 pr-2">
          <LinkGroup iconSrc={githubIcon} alt="GitHub" link="https://github.com/mirmirmirr" isExternal={true} />
          <LinkGroup iconSrc={linkedinIcon} alt="LinkedIn" link="https://www.linkedin.com/in/miranda-zheng-6b0895252/" isExternal={true} />
          <LinkGroup iconSrc={emailIcon} alt="Email" link="mailto:miranda.mzheng@gmail.com" isExternal={true} />
        </div>

        <div 
          className="group w-[35px] h-[35px] flex items-center justify-center rounded-full transition-transform duration-300 ease-in-out hover:bg-blue-100 dark:hover:bg-highlight-blue"
          onClick={toggleTheme}
        >
          <img
            src={isDarkMode ? moonIcon : sunIcon}
            className="w-[20px] h-[20px] filter dark:invert dark:brightness-0 dark:contrast-200 transition-transform duration-300 group-hover:scale-110"
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
          <div className="w-[35px] h-[35px] flex items-center justify-center rounded-full transition-all duration-300 ease-in-out group-hover:bg-blue-100 dark:group-hover:bg-highlight-blue">
            <img
              src={iconSrc}
              className="w-[20px] h-[20px] filter dark:invert dark:brightness-0 dark:contrast-200 transition-transform duration-300 group-hover:scale-110"
              alt={alt}
            />
          </div>
        </a>
      ) : (
        <Link to={link}>
          <div className="w-[35px] h-[35px] flex items-center justify-center rounded-full transition-all duration-300 ease-in-out group-hover:bg-blue-100 dark:group-hover:bg-highlight-blue">
            <img
              src={iconSrc}
              className="w-[20px] h-[20px] filter dark:invert dark:brightness-0 dark:contrast-200 transition-transform duration-300 group-hover:scale-110"
              alt={alt}
            />
          </div>
        </Link>
      )}
      <span className="absolute inline-block -top-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-blue-100 bg-white py-[2px] text-[12px] shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 text-highlight-blue whitespace-nowrap">
        {alt}
      </span>
    </div>
  )
}