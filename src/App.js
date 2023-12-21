import { FaHome, FaStar, FaEnvelope, FaShareAlt, FaStickyNote } from 'react-icons/fa';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-blue-500 text-accent py-4 px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div>
          <button className="bg-secondary text-white py-2 px-4 rounded-lg mr-2">
            <FaHome className="inline-block mr-2" />
            Home
          </button>
          <button className=" bg-primary text-white py-2 px-4 rounded-lg  hover:rounded-3xl">
            <FaStar className="inline-block mr-2" />
            Star
          </button>
        </div>
      </header>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          {/* green/orange square */}
          <div className="w-20 h-20 bg-primary hover:rounded-full transition-all duration-300 hover:bg-accent cursor-pointer">
      
          </div>
        
          {/* title */}
          <h1 className="text-3xl font-bold underline">Hello world!</h1>

          {/* group */}
          <p>hover the big pink square to change group members and peer</p>
          <div className="group peer/myName  w-20 h-20 bg-pink-500 hover:bg-slate-200">
            <div className="w-8 h-8 bg-gray-300 inline-block mr-2 group-hover:bg-green-100"></div>
            <div className="w-8 h-8 bg-gray-300 inline-block group-hover:bg-blue-500"></div>
          </div>
          <div className="peer-hover/myName:bg-red-300    w-20 h-20 bg-green-500"></div>

        </div>
      </div>
      <footer className="bg-pink-500 text-white py-4 px-6 flex justify-end flex-col">
        <p className="mr-4">
          <FaEnvelope className="inline-block mr-2" />
          Contacts
        </p>
        <p className="mr-4">
          <FaShareAlt className="inline-block mr-2" />
          Social Media
        </p>
        <p className="mr-4">
          <FaStickyNote className="inline-block mr-2" />
          Legacy Notes
        </p>
      </footer>
        
    </div>
  );
}

export default App;
