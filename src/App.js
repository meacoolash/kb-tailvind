import { FaHome, FaStar } from 'react-icons/fa';
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
          <div className="w-20 h-20 bg-primary hover:rounded-full transition-all duration-300 hover:bg-accent cursor-pointer">

          </div>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
