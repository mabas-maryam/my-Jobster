import React, { useState } from 'react';

const AddJob = () => {
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('pending');
  const [jobType, setJobType] = useState('full-time');

  const handleClear = () => {
    setPosition('');
    setCompany('');
    setLocation('');
    setStatus('pending');
    setJobType('full-time');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ position, company, location, status, jobType });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md hover:drop-shadow-lg rounded-md mt-12">
      <h2 className="text-xl font-semibold mb-4">Add Job</h2>
      <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" onSubmit={handleSubmit}>
        {/* Position Input */}
        <div className="flex flex-col">
          <label htmlFor="position" className="mb-1 font-medium">Position</label>
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="p-2 border border-gray-300 rounded bg-[#F0F4F8]"
          />
        </div>

        {/* Company Input */}
        <div className="flex flex-col">
          <label htmlFor="company" className="mb-1 font-medium">Company</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="p-2 border border-gray-300 rounded bg-[#F0F4F8]"
          />
        </div>

        {/* Job Location Input */}
        <div className="flex flex-col">
          <label htmlFor="location" className="mb-1 font-medium">Job Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border border-gray-300 rounded bg-[#F0F4F8]"
          />
        </div>

        {/* Status Dropdown */}
        <div className="flex flex-col">
          <label htmlFor="status" className="mb-1 font-medium">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="p-2 border border-gray-300 rounded bg-[#F0F4F8]"
          >
            <option value="pending">pending</option>
            <option value="interview">interview</option>
            <option value="declined">declined</option>
          </select>
        </div>

        {/* Job Type Dropdown */}
        <div className="flex flex-col">
          <label htmlFor="jobType" className="mb-1 font-medium">Job Type</label>
          <select
            id="jobType"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="p-2 border border-gray-300 rounded bg-[#F0F4F8]"
          >
            <option value="full-time">full-time</option>
            <option value="part-time">part-time</option>
            <option value="remote">remote</option>
            <option value="internship">internship</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex items-end space-x-2">
          <button
            type="button"
            onClick={handleClear}
            className="px-6 py-2 w-1/2 bg-gray-500 hover:bg-gray-800 text-white rounded-md"
          >
            Clear
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 hover:bg-blue-800 w-1/2 text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
