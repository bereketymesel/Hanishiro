import React from 'react';
import tegamino from "../../assets/img1.jpg";

const Banner = () => {
  return (
    <>
      <div className='min-h-[620px] flex justify-center items-center py-12 sm:py-0 bg-yellow-300'>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {/* Image section */}
            <div data-aos='fade-down' data-aos-once='true' data-aos-delay='100' className='flex justify-center items-center'>
              <img src={tegamino} alt='' className='max-w-[450px] w-full mx-auto shadow-1'/>
            </div>
            {/* Content section */}
            <div className='space-y-6'>
              <div data-aos='fade-up' data-aos-once='true' data-aos-delay='100'>
                <h2 className='text-2xl font-bold mb-3'>Vision</h2>
                <p>Our vision is to be the leading provider of unforgettable culinary experiences.</p>
              </div>
              <div data-aos='fade-up' data-aos-once='true' data-aos-delay='200'>
                <h2 className='text-2xl font-bold mb-3'>Mission</h2>
                <p>Our mission is to deliver high-quality, delicious food that satisfies and delights our customers.</p>
              </div>
              <div data-aos='fade-up' data-aos-once='true' data-aos-delay='300'>
                <h2 className='text-2xl font-bold mb-3'>Core Values</h2>
                <ul className='list-disc pl-5'>
                  <li>Quality</li>
                  <li>Integrity</li>
                  <li>Customer Satisfaction</li>
                  <li>Innovation</li>
                </ul>
              </div>
              <div data-aos='fade-up' data-aos-once='true' data-aos-delay='400'>
                <h2 className='text-2xl font-bold mb-3'>Our Merits</h2>
                <p>We pride ourselves on our exceptional service, innovative menu, and dedication to quality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
