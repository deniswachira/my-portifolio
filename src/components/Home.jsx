import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import img10 from '../assets/img10.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img11 from '../assets/img11.jpg';
import img12 from '../assets/img12.jpg';
import img13 from '../assets/img13.jpg';
// import img14 from '../assets/img14.jpg';
import img15 from '../assets/img15.jpg';
import img16 from '../assets/img16.jpg';

const images = [img16,img13,img15,img10, img9,img11, img12, img8,  img7, img3, img4, img6, img5];

const Home = () => {
    return (
        <section id="home" className=" text-white py-16 px-6 md:px-20 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Left Text Area */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex-1"
                >
                    <h6 className="text-2xl mb-2">Hello, I'm</h6>
                    <h1 className="text-4xl md:text-6xl font-bold text-green-400 leading-tight">
                        <Typewriter
                            words={['Denis Wachira']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={120}
                            deleteSpeed={80}
                            delaySpeed={2000}
                        />
                    </h1>
                    <div className="flex flex-wrap gap-2 mt-6 w-full justify-center text-center">
                        <span className="bg-orange-500 text-sm px-3 py-1 rounded-full font-medium">Technical Trainer</span>
                        <span className="bg-yellow-500 text-sm px-3 py-1 rounded-full font-medium">Fullstack Developer</span>
                        <span className="bg-blue-500 text-sm px-3 py-1 rounded-full font-medium">Azure AI Engineer</span>
                        {/* <span className="bg-red-500 text-sm px-3 py-1 rounded-full font-medium">Azure Data Scientist</span> */}
                    </div>
                    <div className="mt-8">
                        <a
                            href="https://drive.google.com/file/d/1WLphqYNRMQfk6bNKDjcBaJxjclCs25lF/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="bg-green-500 hover:bg-white hover:text-green-700 transition text-white px-6 py-3 rounded shadow-lg hover:shadow-green-500/50 font-semibold">
                                📄 Download Resume
                            </button>
                        </a>
                    </div>
                </motion.div>

                {/* Right Image Carousel */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                    className="flex-1 w-full md:max-w-md"
                >
                    <div className="rounded-xl p-1 backdrop-blur-md shadow-lg">
                        <div className="flex overflow-x-auto space-x-4 p-4 w-full max-w-full scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-green-300">
                            {images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt="Denis Wachira"
                                    className="h-60 w-48 object-cover rounded-lg border border-white/10"
                                    loading="lazy"
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
