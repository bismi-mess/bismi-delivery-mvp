// MainContent.js
import React from 'react';

function MainContent() {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 pl-10 pr-10">
      <div className="container mx-auto py-6">
        <h2 className="text-2xl font-semibold text-gray-800">Breakfast</h2>
        <p className="text-gray-600 mb-6">Chicken Biriyani</p>

        {/* Main content area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Cards or widgets */}
          <div className="bg-black rounded-lg shadow-md">
  <img src={process.env.PUBLIC_URL + 'fried-rice-with-minced-pork-tomato-carrot-cucumber-plate.jpg'} alt="Image Description" className="rounded-lg shadow-md "/>
  {/* <h3 className="text-lg font-semibold text-white-800 mb-3">Total Orders</h3>
  <p className="text-gray-600">1000</p> */}
</div>







          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Packed</h3>
            <p className="text-gray-600">Time : 7AM</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Pick Up</h3>
            <p className="text-gray-600">Time : 8AM</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Delivery</h3>
            <p className="text-gray-600">Time : Pending</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
