import React from 'react';
import Slider from 'react-slick';
import bahl from '../../assets/bahl.png'; // Ensure the path is correct
import burger from '../../assets/burger.png';
import sanduch from '../../assets/sanduch.png';
import sanduch2 from '../../assets/sanduch2.jpg';
import gere from '../../assets/gere.jpg';

// CSS imports for react-slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MenuData = [
    {
        id: 1,
        name: "bahl",
        price: "birr 120",
        img: bahl,
    },
    {
        id: 2,
        name: " burger",
        price: "birr 120",
        img: burger,
    },
    {
        id: 3,
        name: "sanduch",
        price: "birr 120",
        img: sanduch,
    },
    {
        id: 4,
        name: "sanduch2",
        price: "birr 120",
        img: sanduch2,
    },
    {
      id: 5,
      name: "gere",
      price: "birr 120",
      img: gere,
  },
];

const Home = React.forwardRef((props, ref) => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 700,
        slidesToScroll: 1,
        slidesToShow: 1, // Display one image at a time
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };

    return (
        <div ref={ref} className='py-16 bg-yellow-500 text-black'>
            <div className='container'>
                {/* header section */}
                <div className='mb-10 space-y-5'>
                    <h1 
                        data-aos-delay='300'
                        className='text-center text-4xl font-bold'>WELCOME TO HANI SHIRO</h1>
                     
                    <div
                        data-aos='fade-up'
                        data-aos-once='true'
                        data-aos-delay='300'
                        className='text-center sm:max-w-5m mx-auto text-xs font-bold text-black'>
                        Come and satisfy yourself with our food!
                    </div>
                </div>
                {/* slider section */}
                <div data-aos='zoom-in'>
                    <Slider {...settings}>
                        {MenuData.map((menu) => (
                            <div key={menu.id}>
                                <div>
                                    {/* image section */}
                                    <div className='mb-3 flex justify-center'>
                                        <img src={menu.img} alt={menu.name} className='w-full max-w-full h-auto sm:max-w-[600px] md:max-w-[700px] shadow-red-100' />
                                    </div>
                                    {/* text content section */}
                                    
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
});

export default Home;
