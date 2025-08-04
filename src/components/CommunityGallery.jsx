import { motion } from 'framer-motion';
import cskfirstyrregistration from "../assets/gallery/csk-firstyr-registration.jpg";
import cskinfosession from "../assets/gallery/csk-info-session.jpg";
import csk2023handover from "../assets/gallery/csk-2023-handover.jpg";
import mycoursemate from "../assets/gallery/my-coursemate.jpg";
import csk2526leadership from "../assets/gallery/csk-25-26-leadership.jpg";
import cskazureday from "../assets/gallery/csk-azure-day.jpg";
// Optional fix if both `cskazureday` were meant to be different
// import cskazureday2 from "../assets/gallery/csk-azureday.jpg"; 

const galleryImages = [
  { src: cskfirstyrregistration, alt: "CSK First Year Registration" },
  { src: cskinfosession, alt: "CSK Info Session" },
  { src: csk2023handover, alt: "CSK 2023 Handover" },
  { src: mycoursemate, alt: "With Coursemate" },
  { src: csk2526leadership, alt: "CSK 2025/26 Leadership" },
  { src: cskazureday, alt: "CSK Azure Day" },
  // { src: cskazureday2, alt: "CSK Azure Day 2" },
];

const CommunityGallery = () => {
  return (
    <section className="py-4 px-6 md:px-20">
      <hr />
      <div className="md:flex my-7 items-center justify-center ">
        <div className="text-primary text-4xl font-bold items-center "> 📸 Community Moments</div>
      </div>
      <div className="rounded-xl p-1 backdrop-blur-md shadow-lg">
        <div className="flex overflow-x-auto space-x-4 p-4 w-full max-w-full scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-green-300">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="min-w-[250px] md:min-w-[300px] bg-white/5 rounded-lg p-2 backdrop-blur-md shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-lg w-full h-48 object-cover"
                loading="lazy"
              />
              <p className="text-white text-sm mt-2 text-center opacity-80">{image.alt}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
    
  );
};

export default CommunityGallery;
