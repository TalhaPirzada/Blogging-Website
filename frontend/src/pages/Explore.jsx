import React, { useState } from 'react';
import MainPage from '../components/MainPage';
import Sidebar from '../components/Sidebar';

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='flex flex-col md:flex-row w-full'>
      {/* Main Content */}
      <div className='flex-1 md:w-3/4 p-4'>
        <div className='flex flex-col'>
          <div className='mb-4'>
            <input
              type='text'
              placeholder='Search blogs...'
              value={searchQuery}
              onChange={handleSearchChange}
              className='w-full p-2 border border-gray-300 rounded-lg'
            />
          </div>
          <MainPage />
        </div>
      </div>
      
      {/* Sidebar */}
      <div className='flex-none md:w-1/4 p-4'>
        <Sidebar />
      </div>
    </div>
  );
};

export default Explore;
