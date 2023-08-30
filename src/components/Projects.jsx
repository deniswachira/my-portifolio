import React from "react";
import udhamini from '../assets/projects/udhamini.svg';
import covid from '../assets/projects/covid19tracker.png';
import modern from '../assets/projects/modern-real-estate.png';
import fitness from '../assets/projects/fitness.png';
import showcase from '../assets/projects/showcase.png';

const Projects = () => {
  const projects = [
    {
      title: "Udhamini Scholarships Web App",
      description:
        "Udhamini is a platform that lets all students get access to a centralized repository of scholarships and apply for them.",
      photo: udhamini,
      link: "https://udhaminischolarships-cae2exbygfafa7fm.z01.azurefd.net/pages/404.html?shown=true",
      github: "https://github.com/udhaminiProject",
    },
    {
      title: "COVID-19-TRACKER",
      description:
        "The COVID Tracking Project collects and publishes number of worldwide cases, number of death cases and number of recovered cases. ",
      photo: covid,
      link: "https://covid-19-tracker-75e50.web.app/",
      github: "https://github.com/deniswachira",
    },
    {
      title: "Modern-Real-Estate",
      description:
        "Its is a modern real estate web app that helps buyers to search available houses for renting or buying.I developed using Nextjs with rapid APIs.",
      photo: modern,
      link: "https://modern-real-estate-app-five.vercel.app/",
      github: "https://github.com/deniswachira",
    },
    {
      title: "Fit Club Frontend UI",
      description:
        "A simple fitclub. I designed using ReactJS. The web app is fully responsive and custom animation.",
      photo: fitness,
      link: "https://fit-club-three.vercel.app/",
      github: "https://github.com/deniswachira",
    },
    {
      title: "NFTs Landing Page",
      description:
        "A Landing Page for NFT marketplace for android app . Built with ReactJs fully responsive.",
      photo: showcase,
      link: "https://nfts-marketplace-showcase.vercel.app/",
      github: "https://github.com/deniswachira",
    },
  ];
  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <div className="md:flex my-7 items-center justify-center ">
        <div className="text-primary text-5xl font-bold items-center ">⭐ Featured Project ⭐</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
            >
              <a
                href={project.photo}
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <img src={project.photo} alt={project.title} />
              </a>
              <h3 className="text-primary font-semibold text-lg">
                {project.title}
              </h3>
              <p className=" text-white mt-1">{project.description}</p>
              <div className="mt-5">
                <button className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary">
                  <a href={project.link}>Live Link</a>
                </button>
                <button className="btn outline py-1.5 px-9 rounded border-none ml-5 text-white ">
                  <a href={project.github}>GitHub</a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
