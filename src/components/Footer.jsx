import React from "react";
import facebook from '../assets/socials/facebook.png';
import github from '../assets/socials/github.png';
import twitter from '../assets/socials/twitter.png';
import linkedin from '../assets/socials/linkedin.png';

const Footer = () => {
  let date = new Date();
  return (
    <>
      <div className="md:px-10 px-3 mt-15">
        <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
          <p>@ Copyright {date.getFullYear()} | Denis Wachira</p>
          <p className="hidden sm:block">Fullstack Developer</p>
          <p className="hidden sm:block">Azure AI Engineer & Data Scientist</p>
          <p className="hidden sm:block">Designed by <a className="text-primary" href="https://www.linkedin.com/in/denis-wachira/" target="_blank" rel="noreferrer">
            @deniswachira
          </a></p>
        </div>
        {/* social media */}

      </div>
      <div className="flex justify-center ">
        <a className="" href="https://github.com/deniswachira" target="_blank" rel="noreferrer">
          <img src={github} alt="" width={20} />
        </a>
        <a className="mx-2" href="https://www.linkedin.com/in/denis-wachira/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="" width={20} />
        </a>
        <a className="" href="https://twitter.com/deniswachira_" target="_blank" rel="noreferrer">
          <img src={twitter} alt="" width={20} />
        </a>
        <a className="mx-2" href="https://web.facebook.com/mr.deniswachira/" target="_blank" rel="noreferrer">
          <img src={facebook} alt="" width={20} />
        </a>
      </div>
    </>
  );
};

export default Footer;
