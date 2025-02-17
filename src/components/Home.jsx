import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';
import img10 from '../assets/img10.jpg';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';

const Home = () => {
    return (
        <section className='md:px-10 px-7 my-10 md:h-full bg-[#1a1a29] mb-20' id='home'>
            <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                {/* text */}
                <div className='text-white'>
                    <h6 className='text-3xl mt-12'>Hello, I'm</h6>
                    <h1 className='font-semibold md:text-5xl my-4 text-3xl text-green-500'>
                        <Typewriter
                            words={['Denis Wachira Kathuri']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={120}
                            deleteSpeed={80}
                            delaySpeed={1500}
                        />
                    </h1>
                    <div className='md:w-96 flex'>
                        <p className='text-yellow-400'>Fullstack Developer,</p>
                        <p className='text-blue-400'>Azure AI Engineer,</p>
                        <p className='text-red-400'>Azure Data Scientist.</p>
                    </div>
                    <div className='mt-5'>
                        <a href="https://drive.google.com/file/d/1zmdrR1BeW4EskxlhBifD1ap3CoDCB70g/view?usp=sharing">
                            <button className='btn transition-all duration-500 shadow-sm bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-primary'>
                                Download Resume
                            </button>
                        </a>
                    </div>
                </div>
                {/* img */}
                <div className='order-first md:order-last relative rounded-lg shadow-xl overflow-hidden'>
                    <div className='image-carousel'>
                        <img src={img10} alt="Denis Wachira" loading="lazy" />
                        <img src={img9} alt="Denis Wachira" loading="lazy" />
                        <img src={img8} alt="Denis Wachira" loading="lazy" />
                        <img src={img7} alt="Denis Wachira" loading="lazy" />
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
