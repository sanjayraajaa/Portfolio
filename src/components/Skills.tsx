const Skills: React.FC = () => {
    return (
      <div className="p-6">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <p className="text-gray-400 mt-2">Here are some of the technologies I work with:</p>
        <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <li className="bg-gray-800 p-3 rounded-lg text-center">React</li>
          <li className="bg-gray-800 p-3 rounded-lg text-center">TypeScript</li>
          <li className="bg-gray-800 p-3 rounded-lg text-center">Tailwind CSS</li>
          <li className="bg-gray-800 p-3 rounded-lg text-center">Node.js</li>
        </ul>
      </div>
    );
  };
  
  export default Skills;
  