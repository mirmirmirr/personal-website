import useTheme from "./useTheme";
import { Link } from "react-router-dom";

import homeWhite from "/icons/home.svg";
import githubIcon from "/icons/github.svg";
import emailIcon from "/icons/email.svg";
import linkedinIcon from "/icons/linkedin.svg";
import sunIcon from "/icons/sun.svg";
import moonIcon from "/icons/moon.svg";
import paperIcon from "/icons/paper.svg";
import faceIcon from "/icons/face.svg";

export default function Footer() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-[50px] left-1/2 z-50 -translate-x-1/2 transform">
      <div className="flex items-center gap-2 rounded-[25px] border-2 bg-white p-2 shadow-md shadow-blue-200 transition-transform duration-300 ease-in-out hover:scale-110 dark:bg-black dark:shadow-blue">
        <LinkGroup iconSrc={homeWhite} alt="Home" link="/" />
        <LinkGroup iconSrc={paperIcon} alt="Creative Work" link="/portfolio" />
        <LinkGroup iconSrc={faceIcon} alt="About" link="/about" />
        <div className="flex gap-2 border-r-2 border-l-2 pr-2 pl-2">
          <LinkGroup
            iconSrc={githubIcon}
            alt="GitHub"
            link="https://github.com/mirmirmirr"
            isExternal={true}
          />
          <LinkGroup
            iconSrc={linkedinIcon}
            alt="LinkedIn"
            link="https://www.linkedin.com/in/miranda-zheng-6b0895252/"
            isExternal={true}
          />
          <LinkGroup
            iconSrc={emailIcon}
            alt="Email"
            link="mailto:miranda.mzheng@gmail.com"
            isExternal={true}
          />
        </div>

        <div
          className="group flex h-[35px] w-[35px] items-center justify-center rounded-full transition-transform duration-300 ease-in-out hover:bg-blue-100 dark:hover:bg-blue"
          onClick={toggleTheme}
        >
          <img
            src={isDarkMode ? moonIcon : sunIcon}
            className="h-[20px] w-[20px] filter transition-transform duration-300 group-hover:scale-110 dark:brightness-0 dark:contrast-200 dark:invert"
            alt="mode"
          />
        </div>
      </div>
    </div>
  );
}

function LinkGroup({ iconSrc, alt, link, isExternal = false }) {
  return (
    <div className="group relative">
      {isExternal ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full transition-all duration-300 ease-in-out group-hover:bg-blue-100 dark:group-hover:bg-blue">
            <img
              src={iconSrc}
              className="h-[20px] w-[20px] filter transition-transform duration-300 group-hover:scale-110 dark:brightness-0 dark:contrast-200 dark:invert"
              alt={alt}
            />
          </div>
        </a>
      ) : (
        <Link to={link}>
          <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full transition-all duration-300 ease-in-out group-hover:bg-blue-100 dark:group-hover:bg-blue">
            <img
              src={iconSrc}
              className="h-[20px] w-[20px] filter transition-transform duration-300 group-hover:scale-110 dark:brightness-0 dark:contrast-200 dark:invert"
              alt={alt}
            />
          </div>
        </Link>
      )}
      <span className="absolute -top-10 left-[50%] z-20 inline-block origin-left -translate-x-[50%] scale-0 rounded-lg border border-blue-100 bg-white px-3 py-[2px] text-[12px] whitespace-nowrap text-blue shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 dark:bg-black dark:text-white">
        {alt}
      </span>
    </div>
  );
}
