import React from "react";
import gold from '../assets/license/gold-mls.png';
import csk from '../assets/license/csk.png';
import kahawa from '../assets/license/kahawa.png';



const Community = () => {
  const education = [
    { id: 1, name: 'Gold Microsoft Learn Student Ambassador', description: 'A MLSA is a student leader who is passionate about technology and helps others to learn and engage with Microsoft technologies.', link: 'https://mvp.microsoft.com/en-US/studentambassadors/profile/cbb2c34d-09ac-4c4a-a0f2-8c32010b62dd', image: gold },
    { id: 2, name: 'Computer Society of Kirinyaga', link: 'https://www.linkedin.com/company/computer-society-of-kirinyaga/posts/?feedView=all', description: 'To mobilize students from all courses to share, participate and develop technological skills for a dynamic innovative culture in the university.', image: csk },
    { id: 3, name: 'Koding & Kahawa Developers Community', description: 'The aim of the Koding and Kahawa meetups is to nurture, enable and encourage a vibrant, supportive, and inclusive coding community. My role was to collaborate with other students in a web development journey', link: 'https://www.linkedin.com/company/koding-kahawa/', image: kahawa },
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
