import React from 'react';
import './Home.css';
import img1 from '../assets/img.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.png';

const Home = () => {
    return (
        <section className='md:px-10 px-7 my-10 md:h-full bg-[#1a1a29] mb-20' id='home'>
            <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                {/* text */}
                <div className='text-white'>
                    <h6 className='text-3xl mt-12'>Hello, I'm</h6>
                    <h1 className='font-semibold md:text-5xl my-4 text-3xl'>Denis Wachira</h1>
                    <p className='md:w-96'>Fullstack Developer, Azure AI Engineer & Data Scientist.</p>
                    <div className='mt-5'>
                        <a href="https://1drv.ms/b/s!Ats52FTl3salgrpXWvycpwi-cirQSg?e=0Q1iEp">
                            <button className='btn transition-all duration-500 shadow-sm bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-primary'>
                                Download Resume
                            </button>
                        </a>
                    </div>
                </div>
                {/* img */}
                <div className='order-first md:order-last relative rounded-lg shadow-xl overflow-hidden'>
                    <div className='image-carousel '>
                        <img src={img7} alt="Denis Wachira" loading="lazy" />
                        {/* <img src={img2} alt="Denis Wachira" loading="lazy" /> */}
                        <img src={img3} alt="Denis Wachira" loading="lazy" />
                        <img src={img4} alt="Denis Wachira" loading="lazy" />
                        <img src={img6} alt="Denis Wachira" loading="lazy" />
                        <img src={img5} alt="Denis Wachira" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
