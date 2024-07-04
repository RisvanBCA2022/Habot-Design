import React from 'react';
import adduser from '../assets/adduser.png'; 
import list from '../assets/list.png'; 
import searchdoc from '../assets/searchdoc.png'; 
import edituser from '../assets/edituser.png'; 
import quoterequest from '../assets/quoterequest.png'; 
import teamup from '../assets/teamup.png'; 

const FeatureSection = () => {
  return (
    <div className='w-full py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold mb-2'>How It Works</h2>
          <p className='text-lg mb-4'>
          Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.          </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-8'>
          <div className='bg-white rounded-lg p-4 flex flex-col items-center justify-center h-[160px]'>
            <img src={adduser} alt='Icon 1' className='w-12 h-12 mb-2' />
            <p className='text-center text-gray-800'>Select Your Role and <br /> Sign Up</p>
          </div>
          <div className='bg-[#E8FBFF] rounded-lg p-4 flex flex-col items-center justify-center h-[160px]'>
            <img src={list} alt='Icon 2' className='w-12 h-12 mb-2' />
            <p className='text-center text-gray-800'>Buyers Post Your<br /> Requirements</p>
          </div>
          <div className='bg-white rounded-lg p-4 flex flex-col items-center justify-center h-[160px]'>
            <img src={searchdoc} alt='Icon 3' className='w-12 h-12 mb-2' />
            <p className='text-center text-gray-800'> Review, Select, and <br />Contact the Best Suppliers</p>
          </div>
          <div className='bg-[#E8FBFF] rounded-lg p-4 flex flex-col items-center justify-center h-[160px]'>
            <img src={edituser} alt='Icon 4' className='w-12 h-12 mb-2' />
            <p className='text-center text-gray-800'> Suppliers Complete your<br /> profile and get notified for<br/> opportunities</p>
          </div>
          <div className='bg-white rounded-lg p-4 flex flex-col items-center justify-center h-[160px]'>
            <img src={quoterequest} alt='Icon 5' className='w-12 h-12 mb-2' />
            <p className='text-center text-gray-800'>Contact to Buyers and Share <br /> your Quote for the service</p>
          </div>
          <div className='bg-[#E8FBFF] rounded-lg p-4 flex flex-col items-center justify-center h-[160px]'>
            <img src={teamup} alt='Icon 6' className='w-12 h-12 mb-2' />
            <p className='text-center text-gray-800'>Both the Parties can Connect<br /> and Make Business Leave a <br />Feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
