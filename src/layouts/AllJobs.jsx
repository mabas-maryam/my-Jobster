import React, { useState } from 'react';

const AllJobs = () => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [type, setType] = useState('all');
  const [sort, setSort] = useState('latest');

  const handleClearFilters = () => {
    setSearch('');
    setStatus('all');
    setType('all');
    setSort('latest');
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md hover:drop-shadow-xl rounded-md mt-20 text-gray-800">
      <h2 className="text-2xl font-semibold mb-4">Search Form</h2>
      <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Search Input */}
        <div className="flex flex-col">
          <label htmlFor="search" className="mb-1 font-medium">Search</label>
          <input
            type="text"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
            <option value="all">All</option>
            <option value="active">Interview</option>
            <option value="inactive">Declined</option>
            <option value="inactive">Pending</option>

          </select>
        </div>

        {/* Type Dropdown */}
        <div className="flex flex-col">
          <label htmlFor="type" className="mb-1 font-medium">Type</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="p-2 border border-gray-300 rounded bg-[#F0F4F8]"
          >
            <option value="all">All</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="part-time">Remote</option>
            <option value="part-time">Intership</option>

          </select>
        </div>

        {/* Sort Dropdown */}
        <div className="flex flex-col">
          <label htmlFor="sort" className="mb-1 font-medium">Sort</label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="p-2 border border-gray-300 rounded bg-[#F0F4F8]"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="popular">A-Z</option>
            <option value="popular">Z-A</option>

          </select>
        </div>

        {/* Clear Filters Button */}
        <div className="flex items-end">
          <button
            type="button"
            onClick={handleClearFilters}
            className="px-20 py-2 bg-red-100 text-red-900 hover:text-white hover:bg-red-900 rounded-md"
          >
            Clear Filters
          </button>
        </div>
      </form>
    </div>
  );
};

export default AllJobs;
