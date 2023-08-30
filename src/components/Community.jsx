import React from "react";
import LevelBeta from '../assets/license/LevelBeta.png';
import logo from '../assets/license/logo.jpeg';
import m365 from '../assets/license/m365.png';


const Community = () => {
  const education = [
    { id: 1, name: 'Beta Microsoft Learn Student Ambassador', description: 'A MLSA is a student leader who is passionate about technology and helps others to learn and engage with Microsoft technologies.', link: 'https://mvp.microsoft.com/en-US/studentambassadors/profile/cbb2c34d-09ac-4c4a-a0f2-8c32010b62dd', image: LevelBeta },
    { id: 2, name: 'Microsoft Imagine Cup Competition', link: 'https://imaginecup.microsoft.com/en-US/Member/WinnerCertificate?userid=OgkhzsHxkt3MrO9nT4fcUA%253d%253d&compId=cyhPSUkH6JE55Ta5uaAWmw%253d%253d&teamId=NM%252brbL3tzSw6XuTPnSaEMw%253d%253d', description: 'A team of 4 members we build a solution that helps students to access scholarships on one centralized repository.', image: logo },
    { id: 3, name: 'Game of Learners Season 4 Competition', description: 'The program runs for five weeks, and each team is captained by Microsoft Learn Student Ambassadors, who guide the learners through the process of learning new technologies and building their solutions.', link: 'https://github.com/teamAfyaTechs', image: m365 },
  ]
  return (
    <div className="md:px-10 px-7 my-8" id="license">
      <hr />
      <div className="md:flex my-7 items-center justify-center ">
        <div className="text-primary text-5xl font-bold items-center "> 🌍 Community Engagement 🧑🏻‍🤝‍🧑🏾</div>
      </div>
      <div className='grid md:grid-cols-3 my-8 gap-5 cursor-pointer'>
        {
          education.map(school => <div key={school.id} className=' flex flex-col justify-center items-center p-6 text-center text-white'>
            <img src={school.image} alt="" className='mb-3' width={150} height={120} />
            <h6 className='text-2xl my-4 text-blue-500'>{school.name}</h6>
            <p className='text-base '>{school.description}</p>
            <button className="btn border-2 border-blue-600 transition-all duration-500  py-2 px-6 rounded-3xl text-white hover:bg-blue-600 hover:text-yellow-500">
              <a href={school.link}>My Bio</a>
            </button>
          </div>)
        }
      </div>


    </div>
  );
};

export default Community;
