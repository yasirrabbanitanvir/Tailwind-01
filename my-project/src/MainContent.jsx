import devicesImage from './assets/undraw_devices_re_dxae.svg';

const MainContent = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700 overflow-hidden p-8">
      
      {/* Floating gradient */}
      <div className="absolute top-16 left-10 w-64 h-64 bg-teal-300 opacity-30 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-80 h-80 bg-cyan-400 opacity-20 blur-2xl rounded-full animate-bounce-slow"></div>

      <div className="relative max-w-2xl w-full bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg shadow-2xl rounded-3xl p-12 space-y-12 transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.8)]">
        
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 drop-shadow-lg">
          Welcome to the Dark Mode Toggle App
        </h1>

        {/* Subheading */}
        <p className="text-center text-lg md:text-xl text-gray-800 dark:text-gray-300 leading-relaxed">
          Switch easily between modes and enjoy a modern, sleek interface optimized for every screen.
        </p>

        {/* Image section */}
        <div className="flex justify-center">
          <img
            src={devicesImage}
            alt="Devices Illustration"
            className="w-4/5 md:w-2/3 object-contain rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1"
          />
        </div>

        {/* buttons */}
        <div className="flex justify-center space-x-6">
          <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-lg font-semibold rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-[0_0_20px_rgba(255,165,0,0.8)]">
            Try Dark Mode
          </button>
          <button className="px-8 py-3 bg-white text-red-500 border-2 border-red-500 rounded-xl shadow-md hover:bg-red-50 transform transition hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Animated bar */}
        <div className="w-3/4 mx-auto h-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 rounded-full animate-gradient-x"></div>
      </div>
    </div>
  );
};

export default MainContent;
