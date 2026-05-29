import React from "react";
import kyu_logo2 from '../assets/icons/kyu_logo2.png';
import alx from '../assets/icons/alx.png';
import aberdare from '../assets/icons/aberdare.jpg';

const About = () => {
  const education = [
    { id: 1, name: 'Computer Science', description: 'at Kirinyaga University graduating in October 2025', image: kyu_logo2 },
    { id: 2, name: 'Software Engineering', description: 'Peer-to peer software engineering bootcamp Graduate August 2023', image: alx },
    { id: 3, name: 'Aberdare Insitute of Catering', description: 'Diploma in Food Production graduated in December 2021', image: aberdare },
  ]
  return (
    <div className="md:px-10 px-7 sm:-mt-10" id="about">
      <h1 className="text-primary font-semibold text-3xl mt-5">About me:</h1>
      <p className="my-3 text-white md:w-2/3 leading-[2]">
        I'm a Software Engineer passionate about building scalable, reliable, and impactful digital solutions.
    With experience across frontend, backend, and cloud technologies, I specialize in developing modern
    web applications using React, Next.js, TypeScript, Node.js, ASP.NET, and Azure.

    Currently, I contribute to enterprise software development at Britam, where I work on designing and
    delivering internal business systems, APIs, and cross-platform applications within Agile teams.
    I've also built and launched products including bulk SMS platforms, fintech solutions, and high-traffic
    web applications serving real businesses and users.

    Beyond engineering, I enjoy mentoring developers, contributing to tech communities, and continuously
    exploring emerging technologies that solve real-world problems through software.
      </p>
      <hr />
      <div className="md:flex my-7 items-center justify-center">
        <div className="text-primary text-5xl font-bold items-center">📚 Education 🎓</div>

      </div>
      <div className='grid md:grid-cols-3 my-8 gap-5 cursor-pointer'>
        {
          education.map(school => <div key={school.id} className='service-card flex flex-col justify-center items-center p-6 text-center text-white'>
            <img src={school.image} alt="" className='mb-3' width={120} height={120} />
            <h6 className='text-2xl'>{school.name}</h6>
            <p className='text-base '>{school.description}</p>
          </div>)
        }
      </div>
      <hr />
    </div>
  );
};

export default About;
