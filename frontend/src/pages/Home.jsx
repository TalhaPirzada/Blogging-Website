import React from 'react';
import MainPage from '../components/MainPage';
import Sidebar from '../components/Sidebar';

const Home = () => {
  console.log("Home Component Loaded");

  return (
    <div className='flex flex-col md:flex-row w-full'>
      {/* Main Content */}
      <div className='flex-1 md:w-3/4'>
        <MainPage />
      </div>
      
      {/* Sidebar */}
      <div className='flex-none md:w-1/4'>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
