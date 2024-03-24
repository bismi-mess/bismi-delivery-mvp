// Sidebar.js
import React from 'react';

function Sidebar() {
  return (
    <div className="bg-gray-800 text-gray-100 w-64 flex flex-col">
      {/* Sidebar header */}
      <div className="p-4">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <p className="text-gray-400">Welcome, Admin</p>
      </div>

      {/* Sidebar navigation */}
      <nav className="flex-1">
        <a href="#" className="block py-2 px-4 hover:bg-gray-700">Dashboard</a>
        <a href="#" className="block py-2 px-4 hover:bg-gray-700">Orders</a>
        <a href="#" className="block py-2 px-4 hover:bg-gray-700">Restaurants</a>
        <a href="#" className="block py-2 px-4 hover:bg-gray-700">Customers</a>
        <a href="#" className="block py-2 px-4 hover:bg-gray-700">Settings</a>
      </nav>

      {/* Sidebar footer */}
      <div className="p-4">
        <button className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500">Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;
