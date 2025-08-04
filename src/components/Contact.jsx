import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import facebook from '../assets/socials/facebook.png';
import github from '../assets/socials/github.png';
import twitter from '../assets/socials/twitter.png';
import linkedin from '../assets/socials/linkedin.png';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y0y9g4m', 'template_8xmhbuk', formRef.current, 'NWuZWqUX3JfozkOPW')
      // e.target.reset()
      .then((result) => {
        console.log(result.text);
        setDone(true);
        formRef.current.reset();
      }, (error) => {
        console.log(error.text);
      });

  }
  return (
    <div className="md:px-10 px-7 my-10" id="contact">
      <hr />
      <div className="flex flex-col md:flex-row">
        {/* text and icons */}
        <div className="md:w-1/2">
          <h1 className="text-primary font-semibold text-3xl mt-16">
            Connect with me:
          </h1>
          <p className="my-3 text-white md:w-3/4 leading-[2]">
            Satisfied with me? Please contact me
          </p>
          {/* social icons */}
          <div className="flex mx-3">
            <a href="https://github.com/deniswachira" target="_blank" rel="noreferrer">
              <img src={github} alt="" />
            </a>
            <a className="" href="https://www.linkedin.com/in/denis-wachira/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="" />
            </a>
            <a href="https://twitter.com/deniswachira_" target="_blank" rel="noreferrer">
              <img src={twitter} alt="" />
            </a>
            <a href="https://web.facebook.com/mr.deniswachira/" target="_blank" rel="noreferrer">
              <img src={facebook} alt="" />
            </a>
          </div>
        </div>
        {/* form */}
        <div className="md:w-1/2">
          <p className="mt-16 text-white text-2xl mb-6">Contact me, let's make magic together</p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded required" />
            <input type="email" name="email" placeholder="Email:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3 required" />
            <textarea name="message" id="message" cols="54" rows="4" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-2 required" placeholder="Message:"></textarea>
            <button className="btn transition-all duration-500 bg-primary py-2 px-12 rounded text-white hover:bg-white hover:text-primary block">
              Send
              {done && <p>Thank you for your message! I will get in touch soon</p>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
