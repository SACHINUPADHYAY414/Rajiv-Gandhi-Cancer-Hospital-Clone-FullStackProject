import React from 'react';

const SearchHome = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className='rounded-lg shadow-lg flex justify-center items-center'>
        <div className='flex w-70% items-center'>
          <select className='px-4 py-2 bg-white text-gray-800 border-none'>
            <option className='text-lg font-bold'>Doctor</option>
            <option>Doctor 1</option>
            <option>Doctor 2</option>
          </select>
          <input type='text' className='px-4 py-2 bg-white text-gray-800 border-none' placeholder='Search here' />
        </div>
      </div>
    </div>
  );
};

export default SearchHome;
