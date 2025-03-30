import profile from "../assets/personal/profile.jpg"; 
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaUserCircle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Typewriter from 'typewriter-effect';

const Home: React.FC = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center h-auto py-16 text-center lg:text-left px-6 lg:px-12 mx-auto max-w-6xl">

      {/* Left Section - Profile & Actions */}
      <div className="flex flex-col items-center lg:items-start">
        {/* Profile Image */}
        <img 
          src={profile}
          alt="Sanjay Raja S"
          className="rounded-full border-4 border-gray-700 shadow-lg w-48 h-48 lg:w-56 lg:h-56"
        />

        {/* Actions (Resume Button + Socials) */}
        <div className="mt-6 flex flex-col items-center lg:items-start gap-4">
          {/* Download Resume Button */}
          <a 
            href="/resume.pdf" 
            download 
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md 
            transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-blue-500 text-center w-56"
          >
            Download Resume
          </a>

          {/* Social Media Icons - Now Centered */}
          <div className="w-full flex justify-center space-x-4">
            <a href="https://github.com/sanjayraajaa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black text-2xl transition-colors duration-300">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/sanjayraajaa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077B5] text-2xl transition-colors duration-300">
              <FaLinkedin />
            </a>
            <a href="https://x.com/sanjayraajaa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black text-2xl transition-colors duration-300">
              <FaXTwitter />
            </a>
            <a href="https://instagram.com/sanjayraajaa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E4405F] text-2xl transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="mailto:thesanjayraja@gmail.com" className="text-gray-400 hover:text-[#D44638] text-2xl transition-colors duration-300">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section - Text Content */}
      <div className="lg:ml-12 mt-8 lg:mt-0 max-w-2xl">
        <h1 className="text-4xl font-bold">Sanjay Raja S</h1>

        <h2 className="text-xl text-gray-400 mt-2 flex items-center justify-center lg:justify-start">
          {/* Profile Icon */}
          <FaUserCircle className="mr-2 text-2xl text-gray-400" />

          {/* Typewriter Effect */}
          <Typewriter 
              options={{
              strings: ["Frappe Developer", "Open Source Contributor"],
              autoStart: true,
              loop: true,
              }} 
          />
        </h2>

        <p className="text-lg text-gray-300 mt-4">
          I am a passionate developer and designer specializing in custom application development using Frappe and ERPNext.
          With expertise in HTML, CSS, JavaScript, Python, SQL, and React, I strive to build efficient and user-friendly solutions.
          I am a continuous learner, always expanding my skills to stay ahead in the tech industry.
        </p>
        <p className="text-lg text-gray-300 mt-4">
          Beyond coding, I have a deep love for storytelling and poetry, along with a keen interest in movies and books.
          I hold a Bachelor’s degree in Information Technology from Syed Ammal Arts and Science College, Ramanathapuram, graduating with first-class distinction.
        </p>
      </div>
    </div>
  );
};

export default Home;