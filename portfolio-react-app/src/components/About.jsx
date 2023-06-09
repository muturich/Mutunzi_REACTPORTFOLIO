import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hello world my name is Richard. It's a pleasure to make your acquaintance. Feel free to take a look around.</p>
            </div>
            <div className='text-2xl'>
              <p>Crafting software solutions that improve the quality of life for people in my community is my passion.
                I possess the necessary expertise to create top-notch software for clients of all scales,
                ranging from individuals and small businesses to large enterprises. 
                Just imagine having an easily accessible software specialist at your fingertips</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;