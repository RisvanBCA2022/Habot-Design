import React from 'react';

const CallToAction = () => {
  return (
    <div className='bg-[#E8FBFF] w-full lg:h-[250px] flex flex-col md:flex-row items-center justify-between px-4 md:px-16 lg:px-32 xl:px-52 py-4'>
      <h2 className='text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-0 md:mr-4'>
        Let Suppliers <span className='border-b-4 border-orange-500'>Find You</span>
      </h2>
      <button className='bg-orange-500 text-white py-2 px-6 md:px-8 text-sm md:text-base rounded'>
        Get Verified
      </button>
    </div>
  );
}

export default CallToAction;
