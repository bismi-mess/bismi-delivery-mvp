import React, { useState } from 'react';

function UserDetailsPage() {
  const [userDetails, setUserDetails] = useState({
    name: '',
    age: '',
    email: '',
    city: ''
  });
  const [stats, setStats] = useState({
    totalUsers: 0,
    averageAge: 0
  });

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save user details to database or perform any other action
    // For demonstration, we'll just log the user details
    console.log('User details:', userDetails);
    // Update stats
    setStats({
      totalUsers: stats.totalUsers + 1,
      averageAge: (stats.averageAge * stats.totalUsers + parseInt(userDetails.age, 10)) / (stats.totalUsers + 1)
    });
    // Clear form fields
    setUserDetails({
      name: '',
      age: '',
      email: '',
      city: ''
    });
  };

  return (
    <div className="container mx-auto py-6 px-4 lg:w-1/3">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">User Details</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">Age</label>
          <input
            type="text"
            id="age"
            name="age"
            value={userDetails.age}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your age"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={userDetails.city}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your city"
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
         Check Availability 
        </button>
      </form>

      <div className="bg-white shadow-md rounded p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Stats</h2>
        <p>Total Users in the location: 34</p>
        <p>Average time of Delivery: 35 min </p>
      </div>
    </div>
  );
}

export default UserDetailsPage;
