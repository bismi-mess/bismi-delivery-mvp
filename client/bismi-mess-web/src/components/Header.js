// Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        {/* Swiggy logo */}
        <div className="flex items-center">
          {/* <img src="/path/to/swiggy-logo.png" alt="Bismi" className="h-8 mr-2" /> */}
          <h1 className="text-lg font-bold text-gray-800">Bismi Mess</h1>
        </div>
        
        

      
{/* Hamburger menu for mobile */}
<button className="md:hidden block text-gray-600 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Navigation links */}
        {/* <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Orders</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Restaurants</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Help</a>
        </nav> */}

        {/* User profile and actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">Sign In</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
