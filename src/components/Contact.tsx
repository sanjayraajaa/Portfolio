import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact: React.FC = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/sanjayraajaa", color: "hover:text-black" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/sanjayraajaa", color: "hover:text-[#0077B5]" },
    { icon: <FaXTwitter />, url: "https://x.com/sanjayraajaa", color: "hover:text-black" },
    { icon: <FaInstagram />, url: "https://instagram.com/sanjayraajaa", color: "hover:text-[#E4405F]" },
    { icon: <FaEnvelope />, url: "mailto:thesanjayraja@gmail.com", color: "hover:text-[#D44638]" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully! (Placeholder)");
  };

  return (
    <section className="py-16 text-white" id="contact">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Let’s Connect</h2>
        <p className="text-gray-400 text-center mb-8 text-base">
          Have a project in mind or just want to chat? Drop me a message below!
        </p>

        {/* Contact Card */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 max-w-lg mx-auto">
          {/* Contact Form */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-center mb-4">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                placeholder="Your Email"
              />
              <textarea
                name="message"
                required
                rows={3}
                className="w-full p-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                placeholder="Your Message"
              />
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="border-t border-gray-600 pt-6">
            <h3 className="text-lg font-medium text-center mb-3">Reach Out Directly</h3>
            <p className="text-gray-300 text-center flex items-center justify-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <a href="mailto:thesanjayraja@gmail.com" className="hover:text-blue-400 transition-colors duration-300">
                thesanjayraja@gmail.com
              </a>
            </p>
            <div className="flex justify-center gap-6 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 text-2xl ${link.color} transition-all duration-300 hover:scale-110`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
