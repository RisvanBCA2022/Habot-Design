import React from 'react';
import Background from '../assets/Background.png';
import location from '../assets/location.png';
import suitcase from '../assets/suitcase.png';

function Hero() {
  return (
    <main className="flex flex-col">
      <section
        className="relative w-full h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(356.01deg, rgba(7, 47, 87, 0.75) 50.8%, rgba(7, 47, 87, 0) 94.58%), linear-gradient(0deg, rgba(7, 47, 87, 0.45), rgba(7, 47, 87, 0.45)), url(${Background})`,
        }}
      >
        <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center text-center space-y-6 px-4 md:px-6 pt-16 md:pt-24 lg:pt-28">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white min-[300px]:text-xl">
            Are You a Supplier?
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white max-[300px]:text-lg">
            Explore Matching Opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-4xl md:px-8 w-full md:w-screen items-center justify-center">
            <div className="flex items-center relative flex-1 w-full">
              <img src={suitcase} alt="suitcase icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
              <input
                type="text"
                placeholder="Search your required service here"
                className="flex-1 py-2 pl-10 pr-3 text-base rounded-md h-12 max-[300px]:pr-0"
              />
            </div>
            <div className="flex items-center relative flex-1 w-full">
              <img src={location} alt="location icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
              <input
                type="text"
                placeholder="Search your desired location here"
                className="flex-1 py-2 pl-10 pr-3 text-base rounded-md h-12 max-[300px]:pr-0"
              />
            </div>
            <button className="bg-[#00732F] h-12 sm:h-12 w-full sm:w-28 rounded-md text-white text-base">
              Search
            </button>
          </div>
          <p className="text-white text-sm">
          <span className='font-semibold'>
          Are you a buyer?
          </span>
             {' '}
            <a href="/" className="text-primary underline">
            Click here if you are looking to post a requirements
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Hero;
