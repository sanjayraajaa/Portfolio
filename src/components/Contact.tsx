import React, { useState } from "react";
import axios from "axios";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/sanjayraajaa", color: "hover:text-black" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/sanjayraajaa", color: "hover:text-[#0077B5]" },
    { icon: <FaXTwitter />, url: "https://x.com/sanjayraajaa", color: "hover:text-black" },
    { icon: <FaInstagram />, url: "https://instagram.com/sanjayraajaa", color: "hover:text-[#E4405F]" },
    { icon: <FaEnvelope />, url: "mailto:thesanjayraja@gmail.com", color: "hover:text-[#D44638]" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await axios.post("/.netlify/functions/sendEmail", formData);
      if (response.data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section className="py-16 text-white" id="contact">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Let’s Connect</h2>
        <p className="text-gray-400 text-center mb-8 text-base">
          Have a project in mind or just want to chat? Drop me a message below!
        </p>

        <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 max-w-lg mx-auto">
          <h3 className="text-xl font-semibold text-center mb-4">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-400"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              required
              rows={3}
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-400"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            <p className="mt-2 text-sm text-gray-300 min-h-[20px]">{status}</p>
            <hr className="mt-2 border-gray-600" />
          </div>
          </form>
          <div className="border-t border-gray-600 pt-6">
            <h3 className="text-lg font-medium text-center mb-3">Reach Out Directly</h3>
            <p className="text-gray-300 text-center flex items-center justify-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <a href="mailto:thesanjayraja@gmail.com" className="hover:text-blue-400">
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
                  className={`text-gray-400 text-2xl ${link.color} hover:scale-110`}
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