const Experience: React.FC = () => {
    return (
      <div className="p-6">
        <h2 className="text-3xl font-semibold">Experience</h2>
        <p className="text-gray-400 mt-2">Here’s a brief summary of my professional experience.</p>
        <div className="mt-4 space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-medium">Software Developer</h3>
            <p className="text-gray-400">Company Name - Year</p>
            <p className="text-gray-300 mt-2">Worked on various frontend and backend technologies to build scalable applications.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;