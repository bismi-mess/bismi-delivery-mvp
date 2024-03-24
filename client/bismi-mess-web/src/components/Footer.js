import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (  
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow flex justify-around items-center p-4">
    
      <Link to="/home" className="text-gray-600 hover:text-gray-800">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2m14-4V7a5 5 0 00-5-5H7a5 5 0 00-5 5v3m10 5H7m4 0v4m4-4v4" />
        </svg>
        <span className="text-xs">Home</span>
      </Link>
      <Link to="/location" className="text-gray-600 hover:text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
        <span className="text-xs">Map</span>
      </Link>
      <Link to="/orders" className="text-gray-600 hover:text-gray-800">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <span className="text-xs">Orders</span>
      </Link>
      <Link to="/accounts" className="text-gray-600 hover:text-gray-800">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18m-18 0l5.636-5.636a2 2 0 012.828 0l8.485 8.485a2 2 0 010 2.828l-8.485 8.485a2 2 0 01-2.828 0L3 14" />
        </svg>
        <span className="text-xs">Account</span>
      </Link>
     
    </footer>
  );
}

export default Footer;
