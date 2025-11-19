import React from 'react';
import Reward from '../assets/Reward.png';

const Promotion = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12'>
        
        <div className='md:w-1/2 space-y-6'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6 leading-snug'>
            2023 Madan Bhandari Book Award for Fiction Shortlist
          </h2>
          <p className='text-lg text-gray-700'>
            Celebrating excellence in Nepali literature. Discover the shortlisted titles that captivated judges and readers alike.
          </p>
        </div>

        <div className='md:w-1/2 flex justify-center'>
          <img 
            src={Reward} 
            alt="2023 Madan Bhandari Book Award - Fiction Shortlist" 
            className='rounded-lg max-w-full h-auto max-w-md object-cover' 
          />
        </div>

      </div>
    </div>
  );
};

export default Promotion;