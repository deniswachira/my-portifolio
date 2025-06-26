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
        At the intersection of technology and academia, my journey as a Software Engineer Trainer at Teach2Give is fueled by an unwavering commitment
        to innovation and leadership. With a foundation in Computer Science at Kirinyaga University, I leverage skills in TypeScript, React, Azure, and
        PostgreSQL to drive technological advancements and high availability solutions critical for startups and projects.

        My role transcends technical prowess, embracing community engagement and peer mentorship. This dual path of executive leadership and academic pursuit
        equips me with a unique blend of practical experience and theoretical knowledge, positioning me to contribute significantly to the evolving digital landscape.
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
