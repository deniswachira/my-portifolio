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
        I'm a Computer Science student hailing from Kenya. With a passion
        for technology and a love for adventure,  bringing a unique perspective to
        the field. I have a wealth of knowledge and experience in various aspects of
        technology, including software development, database management, and web
        programming. I'm a dedicated learner who is always seeking out new challenges
        and opportunities for growth. When I'm not studying or working on projects, I enjoy
        exploring the great outdoors and going on adventures. With my combination of technical
        expertise and adventurous spirit, I'm poised to make a positive impact in the world of technology.
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
