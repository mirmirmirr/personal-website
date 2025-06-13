import { Link } from "react-router-dom"; // Correct import for Router
import emailIcon from "../assets/email.png";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";

export default function Header() {
  return (
    <div className="m-[30px] h-[5vh]">
      <div className="absolute flex h-[5vh] w-[663px] items-center rounded-[10px] border border-black px-4">
        <div className="space-x-2 font-['Poppins'] text-[15px] font-normal text-black">
          <Link to="/" className="hover:underline">
            Miranda Zheng
          </Link>{" "}
          /
          <Link to="/projects" className="hover:underline">
            Projects
          </Link>{" "}
          /
          <Link to="/portfolio" className="hover:underline">
            Portfolio
          </Link>{" "}
          /
          <Link to="/resume" className="hover:underline">
            Resume
          </Link>{" "}
          /
          <Link to="/about" className="hover:underline">
            About me!
          </Link>
        </div>
      </div>
      <div className="absolute right-[30px] flex gap-4">
        <img className="h-[29px] w-[29px]" src={emailIcon} alt="Email" />
        <img className="h-[27px] w-[27px]" src={githubIcon} alt="GitHub" />
        <img className="h-[29px] w-[29px]" src={linkedinIcon} alt="LinkedIn" />
      </div>
    </div>
  );
}
