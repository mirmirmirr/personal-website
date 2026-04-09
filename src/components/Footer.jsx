import useTheme from "./useTheme";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  EnvelopeClosedIcon,
  SunIcon,
  MoonIcon,
  CrumpledPaperIcon,
  FaceIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

export default function Footer() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-[50px] left-1/2 z-50 -translate-x-1/2 transform">
      <div className="flex items-center gap-2 rounded-[25px] border-2 bg-white p-2 shadow-md shadow-blue-200 transition-transform duration-300 ease-in-out hover:scale-110 dark:bg-black dark:shadow-blue">
        <LinkGroup
          icon={<HomeIcon className="h-5 w-5" />}
          alt="Home"
          link="/"
        />
        <LinkGroup
          icon={<CrumpledPaperIcon className="h-5 w-5" />}
          alt="Creative Work"
          link="/portfolio"
        />
        <LinkGroup
          icon={<FaceIcon className="h-5 w-5" />}
          alt="About"
          link="/about"
        />
        <div className="flex gap-2 border-r-2 border-l-2 pr-2 pl-2">
          <LinkGroup
            icon={<GitHubLogoIcon className="h-5 w-5" />}
            alt="GitHub"
            link="https://github.com/mirmirmirr"
            isExternal={true}
          />
          <LinkGroup
            icon={<LinkedInLogoIcon className="h-5 w-5" />}
            alt="LinkedIn"
            link="https://www.linkedin.com/in/miranda-zheng-6b0895252/"
            isExternal={true}
          />
          <LinkGroup
            icon={<EnvelopeClosedIcon className="h-5 w-5" />}
            alt="Email"
            link="mailto:miranda.mzheng@gmail.com"
            isExternal={true}
          />
        </div>

        <div
          className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-100 dark:hover:bg-blue"
          onClick={toggleTheme}
        >
          {isDarkMode ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </div>
      </div>
    </div>
  );
}

function LinkGroup({ icon, alt, link, isExternal = false }) {
  return (
    <div className="group relative">
      {isExternal ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="flex h-9 w-9 items-center justify-center rounded-full group-hover:bg-blue-100 dark:group-hover:bg-blue">
            {icon}
          </div>
        </a>
      ) : (
        <Link to={link}>
          <div className="flex h-9 w-9 items-center justify-center rounded-full group-hover:bg-blue-100 dark:group-hover:bg-blue">
            {icon}
          </div>
        </Link>
      )}
      <span className="absolute -top-10 left-[50%] z-20 inline-block origin-left -translate-x-[50%] scale-0 rounded-lg border border-blue-100 bg-white px-3 py-[2px] text-[12px] whitespace-nowrap text-blue shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 dark:bg-black dark:text-white">
        {alt}
      </span>
    </div>
  );
}
