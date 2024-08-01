import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import img1 from '../../assets/img1.jpg';
import beyaynet from '../../assets/beyaynet.png';
import Enkulalfirfir from '../../assets/Enkulalfirfir.jpg';
import Pasta from '../../assets/Pasta.jpg';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
    {
        id: 1,
        name: "Shiro",
        price: "birr 120",
        img: img1,
    },
    {
        id: 2,
        name: "Beyaynet",
        price: "birr 120",
        img: beyaynet,
    },
    {
        id: 3,
        name: "Enkulalfirfir",
        price: "birr 120",
        img: Enkulalfirfir,
    },
    {
        id: 4,
        name: "Pasta",
        price: "birr 120",
        img: Pasta,
    },
];

const Testimonials = () => {
    const [sliderKey, setSliderKey] = useState(Date.now());

    useEffect(() => {
        // Reset the slider key to force a re-render when the component mounts or updates
        setSliderKey(Date.now());
    }, []);

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 700,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='py-10 mb-10 bg-yellow-300'>
            <div className='container'>
                {/* Header section */}
                <div data-aos='zoom-in' className='mb-10'>
                    <h1 className='text-center text-4xl font-bold font-cursive2'>
                        Testimonials
                    </h1>
                </div>
                {/* Slider section */}
                <div data-aos='zoom-in'>
                    <Slider key={sliderKey} {...settings}>
                        {TestimonialData.map((item) => (
                            <div key={item.id} className='p-4'>
                                <div>
                                    {/* Image Section */}
                                    <div className='mb-3 flex justify-center'>
                                        <img src={item.img} alt={item.name} className='rounded-full w-auto sm:max-w-[200px] md:max-w-[250px] shadow-lg' />
                                    </div>
                                    {/* Text Content Section */}
                                    <div className='flex flex-col items-center gap-4'>
                                        {/* <div className='space-y-3 text-center'>
                                            <p className='text-xs text-gray-500'>{item.text || "No feedback available"}</p>
                                            <h1 className='text-xl font-semibold'>{item.name}</h1>
                                            <p className='text-2xl'>{item.price}</p>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
