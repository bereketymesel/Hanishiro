import React from 'react';
import { useNavigate } from 'react-router-dom';
import heropng from "../../assets/heropng.jpg";

const Specialhani = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleViewMenuClick = () => {
    // Navigate to the main menu page
    navigate('/menu');
  };

  return (
    <main>
      <div className='min-h-[5px] sm:min-h-[10px] bg-yellow-500 flex justify-center items-center'>
        <div className='container pb-8 sm:pb-0'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
            {/* text content section */}
            <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left'>
              <h1 className='text-5xl text-primary font-bold font-cursive'>
                Special
                <span className='text-3xl font-sans text-emerald-400'>Hani</span>
              </h1>
              <p 
                data-aos='fade'
                data-aos-delay='300'
                className='text-sm text-dark font-sans'
              >
                Our Special Hani is Delicious
              </p>
              <div 
                data-aos='fade-up'
                data-aos-offset='0'
                data-aos-delay='400'
                className='primary-btn'
              >
                <button onClick={handleViewMenuClick}>View Our Menu</button>
              </div>
            </div>
            {/* our hero image */}
            <div 
              data-aos='zoom-in'
              data-aos-duration='500'
              className='min-h-[450px] flex justify-center items-center relative order-1 sm:order-2'
            >
              <img src={heropng} className='max-w-[450px] w-full mx-auto sm:scale-125 shadow-1' />
              <div className='bg-primary p-3 rounded-xl absolute top-10 left-10 hidden md:block text-white'>
                <h1>
                  Fresh Food
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Specialhani;