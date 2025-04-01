import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaUserCircle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Typewriter from 'typewriter-effect';
import profile from "../assets/personal/profile.jpg";

const homeData = {
  name: "Sanjay Raja S",
  title: ["Frappe Developer", "ERPNext Consultant","Aspiring Writer"],
  profileImage: profile,
  resumeLink: "/resume.pdf",
  description: [
    "I am a passionate developer and designer specializing in custom application development using Frappe and ERPNext. With expertise in HTML, CSS, JavaScript, Python, SQL, and React, I strive to build efficient and user-friendly solutions. I am a continuous learner, always expanding my skills to stay ahead in the tech industry.",
    "Beyond coding, I have a deep love for storytelling and poetry, along with a keen interest in movies and books. I hold a Bachelor’s degree in Information Technology from Syed Ammal Arts and Science College, Ramanathapuram, graduating with first-class distinction."
  ],
  socialLinks: [
    { icon: <FaGithub />, url: "https://github.com/sanjayraajaa", color: "hover:text-black" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/sanjayraajaa", color: "hover:text-[#0077B5]" },
    { icon: <FaXTwitter />, url: "https://x.com/sanjayraajaa", color: "hover:text-black" },
    { icon: <FaInstagram />, url: "https://instagram.com/sanjayraajaa", color: "hover:text-[#E4405F]" },
    { icon: <FaEnvelope />, url: "mailto:thesanjayraja@gmail.com", color: "hover:text-[#D44638]" },
  ]
};

const Home: React.FC = () => {
  return (
<div className="relative flex flex-col lg:flex-row items-center justify-center h-auto py-12 text-center lg:text-left px-6 lg:px-12 mx-auto max-w-6xl">
  {/* Left Section - Profile & Actions */}
  <div className="flex flex-col items-center lg:items-start">
    {/* Profile Image */}
    <img 
      src={homeData.profileImage}
      alt={homeData.name}
      className="rounded-full border-4 border-gray-700 shadow-lg w-44 h-44 lg:w-52 lg:h-52"
    />

    {/* Actions (Resume Button + Socials) */}
    <div className="mt-4 flex flex-col items-center lg:items-start gap-4">
      {/* Download Resume Button */}
      <a 
        href={homeData.resumeLink} 
        download 
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-blue-500 text-center w-48"
      >
        Download Resume
      </a>

      {/* Social Media Icons */}
      <div className="w-full flex justify-center space-x-4">
        {homeData.socialLinks.map((social, index) => (
          <a 
            key={index} 
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`text-gray-400 text-2xl transition-transform duration-300 transform hover:scale-110 ${social.color}`}
          > 
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  </div>

  {/* Right Section - Text Content */}
  <div className="lg:ml-10 mt-6 lg:mt-0 max-w-2xl">
    <h1 className="text-4xl font-bold">{homeData.name}</h1>
    <h2 className="text-xl text-gray-400 mt-2 flex items-center justify-center lg:justify-start">
      <FaUserCircle className="mr-2 text-2xl text-gray-400" />
      <Typewriter options={{ strings: homeData.title, autoStart: true, loop: true }} />
    </h2>
    {homeData.description.map((para, index) => (
      <p key={index} className="text-lg text-gray-300 mt-4">{para}</p>
    ))}
  </div>
</div>
  );
};

export default Home;