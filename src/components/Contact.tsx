const Contact: React.FC = () => {
    return (
      <div className="p-6 text-center">
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <p className="text-gray-400 mt-2">Feel free to reach out to me via email or social media.</p>
        <div className="mt-4">
          <p>Email: <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">your.email@example.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-400 hover:underline">linkedin.com/in/yourprofile</a></p>
        </div>
      </div>
    );
  };
  
  export default Contact;