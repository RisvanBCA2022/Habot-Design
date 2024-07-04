import React, { useState } from 'react';
import arrow from '../assets/arrow.png';
import YTContainer from './YtContainer';


const Frame1 = () => {
  const [selectedOption, setSelectedOption] = useState('buyer'); // State to track selected option

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='p-6 md:p-10 px-4 md:px-28 min-h-screen flex flex-col justify-between'>
      <div className='flex flex-col lg:flex-row w-full gap-6 md:gap-10 items-center justify-center md:justify-start flex-1'>
        <div className='w-full md:w-1/2 text-center md:text-left flex flex-col justify-center'>
          <h1 className='text-3xl md:text-4xl pb-3 font-semibold'>Ready to dive into HABOT?</h1>
          <p className='pb-3 text-lg md:text-xl'>
            Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. 
            Gain access to a vibrant community of like-minded individuals, unlock valuable resources, 
            and take the first step towards realizing your entrepreneurial dreams.
          </p>
          <button className='relative bg-[#00732F] h-12 w-full sm:w-60 rounded-md text-white text-sm flex items-center justify-center px-6'>
            Sign up Today!
            <img src={arrow} alt="Arrow" className="ml-2 w-4 h-4" />
          </button>
        </div>
        
        <div className='w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-3'>
          {['Abu Dhabi', 'Dubai', 'Sharjah & Ajman', 'Fujairah', 'Ras Al Khaimah', 'Umm Al Quwain'].map((city) => (
            <div key={city} className='border border-orange-500 rounded-lg text-center py-4 hover:bg-orange-500 hover:text-white cursor-pointer relative group'>
              <span className='text-lg md:text-xl'>{city}</span>
              <img src={arrow} alt="Arrow" className="ml-2 w-4 h-4 absolute top-1/2 right-0 transform -translate-y-1/2 opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
      <div className='mt-10 flex-grow'>
        <YTContainer />
      </div>
    </div>
  );
}

export default Frame1;
