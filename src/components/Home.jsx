import React from 'react';
import img2 from '../assets/img.png'

const Home = () => {
    return (
        <div className='md:px-10 px-7 my-10 md:h-full bg-[#1a1a29] mb-20' id='home'>
            <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                {/* image & content */}
                {/* text */}
                <div className='text-white'>
                    <h6 className='text-3xl mt-12'>Hello, I'm</h6>
                    <h1 className='font-semibold md:text-5xl my-4 text-3xl'>Denis Wachira</h1>
                    <p className='md:w-96'>Fullstack Developer & Azure Cloud Expert.</p>
                    <div className='mt-5 '>
                        <button className='btn transition-all duration-500 shadow-sm  bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-primary'><a href="https://1drv.ms/b/s!Ats52FTl3salgrktDiZWtWNRnuGdJw?e=IreagE">Download Resume</a> </button>
                    </div>
                </div>
                {/* img */}
                <div className='order-first md:order-last relative rounded-lg  shadow-xl'>
                    <img src={img2} alt="" />
                </div>

            </div>

        </div>
    );
};

export default Home;