import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import MainContent from './MainContent';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Navbar */}
      <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-3xl font-semibold">🌙 Dark Mode Toggle App</span>
          <DarkModeToggle />
        </div>
      </header>

      {/* Main Content */}
      <MainContent />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            Made with ❤️ by Yasir Rabbani Tanvir, {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
