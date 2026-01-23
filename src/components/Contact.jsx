import React, { useState } from "react";
import facebook from '../assets/socials/facebook.png';
import github from '../assets/socials/github.png';
import twitter from '../assets/socials/twitter.png';
import linkedin from '../assets/socials/linkedin.png';
import youtube from '../assets/socials/youtube.svg';
import { trackContactSubmission, trackSocialClick } from '../utils/analytics';

const Contact = () => {
  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormState({ isSubmitting: true, isSubmitted: false, error: null });

    const form = e.target;
    const formData = new FormData(form);

    try {
      // Formspree endpoint - replace with your actual form ID after setup
      const response = await fetch("https://formspree.io/f/xkojbzoq", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormState({ isSubmitting: false, isSubmitted: true, error: null });
        form.reset();

        // Track successful form submission
        trackContactSubmission();
      } else {
        throw new Error('Form submission failed');
      }

    } catch (error) {
      console.error('Form submission error:', error);
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <div className="md:px-10 px-7 my-10" id="contact">
      <hr />
      <div className="flex flex-col md:flex-row">
        {/* text and icons */}
        <div className="md:w-1/2">
          <h1 className="text-primary font-semibold text-3xl mt-16">
            Connect with me:
          </h1>
          <p className="my-3 text-white md:w-3/4 leading-[2]">
            Satisfied with me? Please contact me
          </p>
          {/* social icons */}
          <div className="flex mx-3 items-center space-x-2">
            <a
              href="https://github.com/deniswachira"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackSocialClick('GitHub')}
            >
              <img src={github} alt="GitHub" className="w-8 h-8 object-contain" />
            </a>
            <a
              href="https://www.linkedin.com/in/denis-wachira/"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackSocialClick('LinkedIn')}
            >
              <img src={linkedin} alt="LinkedIn" className="w-8 h-8 object-contain" />
            </a>
            <a
              href="https://x.com/deniswachira_"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackSocialClick('Twitter')}
            >
              <img src={twitter} alt="Twitter" className="w-8 h-8 object-contain" />
            </a>
            <a
              href="https://web.facebook.com/mr.deniswachira/"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackSocialClick('Facebook')}
            >
              <img src={facebook} alt="Facebook" className="w-8 h-8 object-contain" />
            </a>
            <a
              href="https://www.youtube.com/@CodeWithDenis"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackSocialClick('YouTube')}
            >
              <img src={youtube} alt="YouTube" className="w-8 h-8 object-contain" />
            </a>
          </div>
        </div>
        {/* form */}
        <div className="md:w-1/2">
          <p className="mt-16 text-white text-2xl mb-6">Contact me, let's make magic together</p>

          {/* Formspree Form */}
          <form
            action="https://formspree.io/f/xkojbzoq"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Email field for Formspree to send to */}
            <input type="hidden" name="_to" value="deniswachira77@gmail.com" />
            <input type="hidden" name="_subject" value="New Portfolio Contact from Denis Wachira's Website" />
            <input type="hidden" name="_next" value="https://yoursite.com/thank-you" />
            <input type="hidden" name="_captcha" value="false" />

            <div>
              <input
                type="text"
                name="name"
                placeholder="Name:"
                className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                required
                disabled={formState.isSubmitting}
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email:"
                className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                required
                disabled={formState.isSubmitting}
              />
            </div>

            <div>
              <textarea
                name="message"
                rows="4"
                className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                placeholder="Message:"
                required
                disabled={formState.isSubmitting}
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="btn transition-all duration-500 bg-primary py-2 px-12 rounded text-white hover:bg-white hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                disabled={formState.isSubmitting}
              >
                {formState.isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send'
                )}
              </button>
            </div>

            {/* Success Message */}
            {formState.isSubmitted && (
              <div className="bg-green-500 bg-opacity-20 border border-green-500 text-green-400 px-4 py-3 rounded mt-4">
                <p>✅ Thank you for your message! I will get in touch soon.</p>
              </div>
            )}

            {/* Error Message */}
            {formState.error && (
              <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-400 px-4 py-3 rounded mt-4">
                <p>❌ {formState.error}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
