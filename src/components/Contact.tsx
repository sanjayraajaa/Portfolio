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
    // Placeholder for form submission logic
    alert("Message sent successfully! (Placeholder)");
  };

  return (
    <section className="py-20 text-white" id="contact">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Let’s Connect</h2>
        <p className="text-gray-400 text-lg text-center mb-12">
          Have a project in mind or just want to chat? Drop me a message below!
        </p>

        {/* Centered Card */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 max-w-2xl mx-auto">
          {/* Contact Form */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-center mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-4 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-4 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full p-4 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                  placeholder="Your Message"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-10 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="border-t border-gray-600 pt-8">
            <h3 className="text-xl font-medium text-center mb-4">Reach Out Directly</h3>
            <p className="text-gray-300 text-center mb-6 flex items-center justify-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <a href="mailto:thesanjayraja@gmail.com" className="hover:text-blue-400 transition-colors duration-300">
                thesanjayraja@gmail.com
              </a>
            </p>
            <div className="flex justify-center gap-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 text-2xl ${link.color} transition-all duration-300 hover:scale-125`}
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