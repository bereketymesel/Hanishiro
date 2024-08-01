import React from 'react';
import heropng from "../../assets/heropng.jpg";

const AboutUs = React.forwardRef((props, ref) => {
  return (
    <main ref={ref}>
      <div className='min-h-[5px] sm:min-h-[10px] bg-yellow-600 flex justify-center items-center'>
        <div className='container pb-8 sm:pb-0'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
            {/* Text content section */}
            <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left'>
              <h1 className='text-5xl text-primary font-bold font-cursive'>
                About
                <span className='text-3xl font-sans text-emerald-400'>Us</span>
              </h1>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div data-aos='fade-up' data-aos-once='true' data-aos-delay='100'>
                  <h2 className='text-2xl font-bold mb-3'>HaniShiro</h2>
                  <p>Hani shiro was established in 1993 E.C with members of 5 friends with the capital of 5000 birr
                    and now the owners are two of from those friend and now we are wife and husband and now the capital is raised
                    to one milion and above with 6 workers.
                  </p>
                </div>
                <div data-aos='fade-up' data-aos-once='true' data-aos-delay='200'>
                  <h2 className='text-2xl font-bold mb-3'>we have deliciuse food</h2>
                  <ul className='list-disc pl-5'>
                    <li>Tegamino</li>
                    <li>Beyaynet</li>
                    <li>TimatimKatelo</li>
                    <li>Gomen</li>
                    <li>Enkulal Firfir</li>
                    <li>ShiroFeses</li>
                    <li>DaboFirfir</li>
                    <li>Pasta and Mokoreni</li>
                  </ul>
                </div>
                <div data-aos='fade-up' data-aos-once='true' data-aos-delay='300'>
                  <h2 className='text-2xl font-bold mb-3'>Why Choose Us ?</h2>
                  <ul className='list-disc pl-5'>
                    <li>Food Quality</li>
                    <li>Fast Dlivery</li>
                    <li>Customer Satisfaction</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Our hero image */}
            <div 
              data-aos='zoom-in'
              data-aos-duration='500'
              className='min-h-[450px] flex justify-center items-center relative order-1 sm:order-2'>
              <img src={heropng} className='max-w-[450px] w-full mx-auto sm:scale-125 shadow-1'/>
              <div className='bg-primary p-3 rounded-xl absolute top-10 left-10 hidden md:block text-white'>
                <h1>fresh food</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
});

export default AboutUs;
