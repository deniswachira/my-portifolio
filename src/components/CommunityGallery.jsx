import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import cskfirstyrregistration from "../assets/gallery/csk-firstyr-registration.jpg";
import cskinfosession from "../assets/gallery/csk-info-session.jpg";
import csk2023handover from "../assets/gallery/csk-2023-handover.jpg";
import mycoursemate from "../assets/gallery/my-coursemate.jpg";
import csk2526leadership from "../assets/gallery/csk-25-26-leadership.jpg";
import cskazureday from "../assets/gallery/csk-azure-day.jpg";
import kenyaDataPlatform from "../assets/gallery/kenya-data-platform-usergroup-lead.jpg";
import laikipiaswecohort from "../assets/gallery/LaikipiaSWECohort.jpg";
import teamlimitless from "../assets/gallery/teamlimitless.png";
import HykeWithLaikipiaCampusTrainees from "../assets/gallery/HykeWithLaikipiaCampusTrainees.jpg";
import CSKleads2425 from "../assets/gallery/CSKleads2425.jpg";
// Optional fix if both `cskazureday` were meant to be different
// import cskazureday2 from "../assets/gallery/csk-azureday.jpg"; 

const galleryImages = [
  { src: kenyaDataPlatform, alt: "Kenya Data Platform Usergroup Lead" },
  { src: teamlimitless, alt: "Team Limitless" },
  { src: laikipiaswecohort, alt: "Laikipia SWE Cohort" },
  { src: HykeWithLaikipiaCampusTrainees, alt: "Hyke With Laikipia Campus Trainees" },
  { src: CSKleads2425, alt: "CSK Leads 2024/25" },
  { src: cskfirstyrregistration, alt: "CSK First Year Registration" },
  { src: cskinfosession, alt: "CSK Info Session" },
  { src: csk2023handover, alt: "CSK 2023 Handover" },
  { src: mycoursemate, alt: "With Coursemate" },
  { src: csk2526leadership, alt: "CSK 2024/25 Leadership" },
  { src: cskazureday, alt: "CSK Azure Day" },
  // { src: cskazureday2, alt: "CSK Azure Day 2" },
];

const CommunityGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoadingStates, setImageLoadingStates] = useState({});
  const scrollContainerRef = useRef(null);

  // Handle image loading
  const handleImageLoad = (index) => {
    setImageLoadingStates(prev => ({ ...prev, [index]: true }));
  };

  const handleImageError = (index) => {
    setImageLoadingStates(prev => ({ ...prev, [index]: 'error' }));
  };

  // Modal navigation
  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateModal = (direction) => {
    if (selectedImage === null) return;
    const newIndex = direction === 'next'
      ? (selectedImage + 1) % galleryImages.length
      : selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1;
    setSelectedImage(newIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage === null) return;

      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowRight':
          navigateModal('next');
          break;
        case 'ArrowLeft':
          navigateModal('prev');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  // Smooth scroll functions
  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <section className="py-4 px-6 md:px-20">
      <hr />
      <div className="md:flex my-7 items-center justify-center">
        <div className="text-primary text-4xl font-bold items-center">📸 Community Moments</div>
      </div>

      {/* Gallery Container */}
      <div className="relative rounded-xl p-1 backdrop-blur-md shadow-lg">
        {/* Scroll Navigation Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Scrollable Gallery */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-4 p-4 w-full max-w-full scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-green-300 scroll-smooth"
          style={{ scrollbarWidth: 'thin' }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="min-w-[250px] md:min-w-[300px] bg-white/5 rounded-lg p-2 backdrop-blur-md shadow-lg cursor-pointer group relative overflow-hidden"
              onClick={() => openModal(index)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && openModal(index)}
              aria-label={`View ${image.alt} in full size`}
            >
              {/* Loading State */}
              {!imageLoadingStates[index] && imageLoadingStates[index] !== 'error' && (
                <div className="absolute inset-0 bg-gray-700 rounded-lg animate-pulse flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              {/* Error State */}
              {imageLoadingStates[index] === 'error' && (
                <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs">Image not available</p>
                  </div>
                </div>
              )}

              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-lg w-full h-48 object-cover transition-all duration-300 group-hover:brightness-110"
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
                style={{ display: imageLoadingStates[index] === 'error' ? 'none' : 'block' }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 p-2 rounded-full backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>

              {/* Caption */}
              <p className="text-white text-sm mt-2 text-center opacity-80 group-hover:opacity-100 transition-opacity duration-200">
                {image.alt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white/70 hover:text-white text-2xl z-10"
                aria-label="Close modal"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateModal('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => navigateModal('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image */}
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />

              {/* Caption */}
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <p className="text-white text-lg font-medium">
                  {galleryImages[selectedImage].alt}
                </p>
                <p className="text-white/60 text-sm mt-1">
                  {selectedImage + 1} of {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CommunityGallery;
