import React, { useState } from 'react';

const Profile = () => {
  const [name, setName] = useState('test user');
  const [lastName, setLastName] = useState('shake and bake');
  const [email, setEmail] = useState('testUser@test.com');
  const [location, setLocation] = useState('vegan food truck');

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Handle save changes logic
    console.log({ name, lastName, email, location });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-md  hover:drop-shadow-lg mt-12">
      <h2 className="text-xl font-semibold mb-4">Profile</h2>
      <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" onSubmit={handleSaveChanges}>
        {/* Name Input */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Last Name Input */}
        <div className="flex flex-col">
          <label htmlFor="lastName" className="mb-1 font-medium">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Location Input */}
        <div className="flex flex-col">
          <label htmlFor="location" className="mb-1 font-medium">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Save Changes Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="p-2 px-24 bg-blue-500 hover:bg-blue-800 text-white rounded-md"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
