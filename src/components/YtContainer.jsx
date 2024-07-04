import React, { useState } from 'react';
import checked from '../assets/checked.png'; // Assuming you have this image imported

const YTContainer = () => {
  const [selectedOption, setSelectedOption] = useState('buyer'); // State to track selected option

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='my-6 md:my-10 pt-6 pb-8 md:pb-12 px-4 md:px-28 bg-[#072F57] text-white min-h-[50vh] flex flex-col'>
      <div className='flex flex-col lg:flex-row w-full gap-6 md:gap-10 flex-1'>
        {/* Left Side - YouTube Video Container */}
        <div className='w-full lg:w-1/2 flex flex-col justify-center'>
          <div className='aspect-w-16 aspect-h-9 w-full h-full'>
            <iframe
              title='YouTube Video'
              src='https://www.youtube.com/embed/IZLp-TZyDkQ'
              className='w-full h-full'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        {/* Right Side - Buyer/Seller Options */}
        <div className='w-full lg:w-1/2 flex flex-col justify-between'>
          <div className='bg-[#072F57] text-white rounded-lg p-4 flex-1 flex flex-col justify-between'>
            <div className='flex justify-between mb-4'>
              <button
                className={`w-1/2 text-lg font-bold ${selectedOption === 'buyer' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-300'}`}
                onClick={() => handleOptionChange('buyer')}
              >
                Buyer
              </button>
              <button
                className={`w-1/2 text-lg font-bold ${selectedOption === 'seller' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-300'}`}
                onClick={() => handleOptionChange('seller')}
              >
                Seller
              </button>
            </div>
            
            {/* Points */}
            <div className='flex-grow'>
              {selectedOption === 'buyer' && (
                <ul className='list-none space-y-4 text-lg'>
                  <li className='flex items-center'>
                    <img src={checked} alt='Checked' className='w-6 h-6 mr-3' />
                    Post your requirements.
                  </li>
                  <li className='flex items-center'>
                    <img src={checked} alt='Checked' className='w-6 h-6 mr-3' />
                    Sit back for multiple suppliers to contact you.
                  </li>
                  <li className='flex items-center'>
                    <img src={checked} alt='Checked' className='w-6 h-6 mr-3' />
                    Choose among the suppliers based on the ratings and reviews.
                  </li>
                </ul>
              )}
              {selectedOption === 'seller' && (
                <ul className='list-none space-y-4 text-lg'>
                  <li className='flex items-center'>
                    <img src={checked} alt='Checked' className='w-6 h-6 mr-3' />
                    Complete your profile and get verified.
                  </li>
                  <li className='flex items-center'>
                    <img src={checked} alt='Checked' className='w-6 h-6 mr-3' />
                    Select service tags for relevant opportunities.
                  </li>
                  <li className='flex items-center'>
                    <img src={checked} alt='Checked' className='w-6 h-6 mr-3' />
                    Reach out to the buyers and expand your business.
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YTContainer;
