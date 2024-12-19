import emailIcon from '../assets/email.png';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import mirandaImage from '../assets/miranda.png';

export default function Landing() {
  return (
    <div>
      <div className="w-[1440px] h-[832px] relative bg-white  overflow-hidden">
          <img className="w-[661px] h-[667px] left-[810px] top-[172px] absolute" src={mirandaImage} />
          <div className="w-[331px] h-[133px] left-[118px] top-[586px] absolute"><span class="text-black text-xl font-normal font-['Poppins']">i’m studying </span><span class="text-black text-xl font-bold font-['Poppins']">computer science </span><span class="text-black text-xl font-normal font-['Poppins']">and </span><span class="text-black text-xl font-bold font-['Poppins']">information technology and web sciences </span><span class="text-black text-xl font-normal font-['Poppins']">at Rensselaer Polytechnic Insititute.</span></div>
          <div className="w-[1165px] h-[452px] left-[76px] top-[101px] absolute">
              <div className="w-[1126px] h-[422px] left-0 top-[30px] absolute">
                  <div className="w-[1112px] h-[407px] left-[7px] top-[7px] absolute bg-white/0 border-2 border-[#3395ff]" />
                  <div className="w-[15px] h-[15px] left-0 top-0 absolute bg-white border-2 border-[#3395ff]" />
                  <div className="w-[15px] h-[15px] left-0 top-[407px] absolute bg-white border-2 border-[#3395ff]" />
                  <div className="w-[15px] h-[15px] left-[1111px] top-0 absolute bg-white border-2 border-[#3395ff]" />
                  <div className="w-[15px] h-[15px] left-[1111px] top-[407px] absolute bg-white border-2 border-[#3395ff]" />
              </div>
              <div className="w-[1123px] h-[404px] left-[42px] top-0 absolute">
                  <div className="w-[1123px] h-[404px] left-0 top-0 absolute text-black text-[150px] font-normal font-['Poppins']">Miranda</div>
                  <div className="w-[254px] h-[19px] left-[10px] top-[114px] absolute text-black text-xl font-normal font-['Poppins']">hello! my name is</div>
                  <div className="w-[622px] h-[0px] left-[10px] top-[255px] absolute border-2 border-[#3395ff]"></div>
              </div>
          </div>
          <div className="w-[1365px] left-[30px] top-[26px] absolute">
              <div className="w-[663px] h-[49px] left-0 top-0 absolute">
                  <div className="w-[663px] h-[49px] left-0 top-0 absolute rounded-[10px] border border-black" />
                  <div className="w-[572px] h-[19px] left-[18px] top-[15px] absolute text-black text-[15px] font-normal font-['Poppins']">Miranda Zheng  /  Projects  /  Portfolio  /  Resume  / About me!</div>
              </div>
              <div className="w-[109px] h-[29px] left-[1256px] top-[10px] absolute">
                  <img className="w-[29px] h-[29px] left-[41px] top-0 absolute" src={emailIcon} />
                  <img className="w-[27px] h-[27px] left-[82px] top-0 absolute" src={githubIcon} />
                  <img className="w-[29px] h-[29px] left-0 top-0 absolute" src={linkedinIcon} />
              </div>
          </div>
      </div>
    </div>
  );
}