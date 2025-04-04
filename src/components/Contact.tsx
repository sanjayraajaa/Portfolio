import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact: React.FC = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/sanjayraajaa", color: "hover:text-black" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/sanjayraajaa", color: "hover:text-[#0077B5]" },
    { icon: <FaXTwitter />, url: "https://x.com/sanjayraajaa", color: "hover:text-black" },
    { icon: <FaInstagram />, url: "https://instagram.com/sanjayraajaa", color: "hover:text-[#E4405F]" },
  ];

  return (
    <section className="py-16 text-white text-center" id="contact">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
        <p className="text-gray-400 mb-4 text-base">
          Reach out to me via email or follow me on social media!
        </p>

        {/* Email */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-400 text-xl" />
            <a href="mailto:thesanjayraja@gmail.com" className="hover:text-blue-400 text-lg">
              thesanjayraja@gmail.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 text-2xl ${link.color} hover:scale-110`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;