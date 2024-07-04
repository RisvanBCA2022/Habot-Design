import React from 'react';
import footerLogo from '../assets/footerLogo.png';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons library

const Footer = () => {
  return (
    <footer className='bg-[#123557] text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='border-t-2 border-white border-opacity-25 mb-6'></div>

        <div className='flex flex-wrap items-start justify-between'>
          <div className='flex flex-col mb-4'>
            <img src={footerLogo} alt='Logo' className='w-24 h-7 border-2 border-white rounded' />
            <p className='text-xs mt-2'>© R Singhania</p>
          </div>

          <div className='flex flex-col mb-4'>
            <p className='font-bold'>Company</p>
            <p className='text-xs mt-2'>About</p>
            <p className='text-xs mt-2'>FAQ</p>
          </div>

          <div className='flex flex-col mb-4'>
            <p className='font-bold'>Terms</p>
            <p className='text-xs mt-2'>Data Privacy</p>
            <p className='text-xs mt-2'>Accessibility</p>
            <p className='text-xs mt-2'>Terms</p>
          </div>

          <div className='flex flex-col mb-4'>
            <p className='font-bold'>Related</p>
            <p className='text-xs mt-2'>Find Buyer</p>
            <p className='text-xs mt-2'>Feedback</p>
          </div>

          <div className='flex justify-center items-center mt-8'>
            <a href='#' className='text-white hover:text-gray-400 mr-4'>
              <FaLinkedin size={24} />
            </a>
            <a href='#' className='text-white hover:text-gray-400 mr-4'>
              <FaTwitter size={24} />
            </a>
            <a href='#' className='text-white hover:text-gray-400 mr-4'>
              <FaFacebook size={24} />
            </a>
            <a href='#' className='text-white hover:text-gray-400'>
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        <div className='border-t-2 border-white border-opacity-25 mt-6'></div>
      </div>
    </footer>
  );
}

export default Footer;
