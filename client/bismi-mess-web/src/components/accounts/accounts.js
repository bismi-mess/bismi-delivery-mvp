import React, { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Dashboard() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulated data for the line chart
  const initialUserData = [
    { name: 'Jan', visits: 200 },
    { name: 'Feb', visits: 300 },
    { name: 'Mar', visits: 400 },
    { name: 'Apr', visits: 600 },
    { name: 'May', visits: 800 },
    { name: 'Jun', visits: 700 },
    { name: 'Jul', visits: 900 },
    { name: 'Aug', visits: 1000 },
    { name: 'Sep', visits: 1200 },
    { name: 'Oct', visits: 1100 },
    { name: 'Nov', visits: 1000 },
    { name: 'Dec', visits: 1300 },
  ];

  useEffect(() => {
    // Simulate fetching user data
    setTimeout(() => {
      setUserData(initialUserData);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h1>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">User statistics </h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={userData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="visits" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4"></h2>
            {/* Add other statistics here */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg">Total costomers: 288</div>
              <div className="bg-gray-200 p-4 rounded-lg">Todays Cancelation: 12</div>
              <div className="bg-gray-200 p-4 rounded-lg">New Orders: 30</div>
              <div className="bg-gray-200 p-4 rounded-lg">Delivered: 79/276</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
