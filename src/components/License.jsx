import React from "react";
// import azureai from "../src/assets/license/azure-ai.png";
import azureai from '../assets/license/azure-ai.png';
import azureai1 from '../assets/license/az-fundamentals.png';
import azureai2 from '../assets/license/m365.png';
import azureai3 from '../assets/license/trainer.png';
import azureresponsibleai from '../assets/license/azure-responsible-ai-workshop-coach.png';
import imagine from '../assets/license/imagine.jpeg';
import azureai4 from '../assets/license/mentee.png';
import azureai5 from '../assets/license/cisco.png';
import gol from '../assets/license/gol.jpg';


const License = () => {
  const education = [
    { id: 1, name: 'Microsoft Certified: Azure AI Fundamentals', link: 'https://www.credly.com/badges/525975fb-54f4-462b-95f9-10d4df0b5e27/public_url', image: azureai },
    { id: 2, name: 'Microsoft Certified: Azure Fundamentals', link: 'https://www.credly.com/badges/9f6c7505-1c6a-48f0-b7a0-390cb56e7383/public_url', image: azureai1 },
    { id: 3, name: 'Microsoft 365 Certified: Fundamentals', link: 'https://www.credly.com/badges/5502b855-1e72-41b4-a923-6423cb9f642b/public_url', image: azureai2 },
    { id: 4, name: 'Student Trainer', link: 'https://www.credly.com/badges/3bcb26e8-a87d-4134-8cfe-af3c237a7477/public_url', image: azureai3 },
    { id: 5, name: 'Azure Responsible AI Workshop - Coach', link: 'https://www.credly.com/badges/a3fd156d-0670-445b-9a33-c75b94271596/public_url', image: azureresponsibleai },
    { id: 6, name: 'Microsoft Imagine Cup Competition', link: 'https://imaginecup.microsoft.com/en-US/Member/WinnerCertificate?userid=OgkhzsHxkt3MrO9nT4fcUA%253d%253d&compId=cyhPSUkH6JE55Ta5uaAWmw%253d%253d&teamId=NM%252brbL3tzSw6XuTPnSaEMw%253d%253d', image: imagine },
    { id: 7, name: 'Game of Learners Season 4 Competition', link: 'https://devpost.com/software/meditrack-afyatechs', image: gol },
    { id: 8, name: 'MLSA Mentee', link: 'https://www.credly.com/badges/be8cd834-013d-48be-bef2-ae5df673d787/public_url', image: azureai4 },
    { id: 9, name: 'Networking Essentials', link: 'https://www.credly.com/badges/b967ba76-ebbd-4083-a3e6-81a9fd88e755/public_url', image: azureai5 },
  ]
  return (
    <div className="md:px-10 px-7 my-8" id="license">
      <hr />
      <div className="md:flex my-7 items-center justify-center ">
        <div className="text-primary text-5xl font-bold items-center "> 🎖️ License & Certification 🏅</div>
      </div>
      <div className='grid md:grid-cols-3 my-8 gap-5 cursor-pointer'>
        {
          education.map(school => <div key={school.id} className='shadow-lg flex flex-col justify-center items-center p-6 text-center text-white'>
            <img src={school.image} alt="" className='mb-3' width={150} height={120} />
            <h6 className='text-2xl my-4 text-blue-500'>{school.name}</h6>
            {/* <p className='text-base '>{school.description}</p> */}
            <button className="btn border-2 border-green-600 transition-all duration-500  py-2 px-6 rounded-3xl text-white hover:bg-green-600 hover:text-yellow-500">
              <a href={school.link}>Verify</a>
            </button>
          </div>)
        }
      </div>
    </div>
  );
};

export default License;
