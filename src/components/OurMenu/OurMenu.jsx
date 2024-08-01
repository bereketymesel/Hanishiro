import React from 'react';
import Slider from 'react-slick';
import img1 from '../../assets/img1.jpg'; // Ensure the path is correct
import beyaynet from '../../assets/beyaynet.png';
// import Pasta from '../../assets/Pasta.jpg';
import Enkulalfirfir from '../../assets/Enkulalfirfir.jpg';

// CSS imports for react-slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MenuData = [
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
    // {
    //     id: 4,
    //     name: "Pasta",
    //     price: "birr 120",
    //     img: Pasta,
    // },
];

const OurMenu = React.forwardRef((props, ref) => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
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
                        className='text-center text-4xl font-bold'>Our Menu</h1>
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
                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='space-y-3 text-center'>
                                            <h1 className='text-xl'>{menu.name}</h1>
                                            <p className='text-3xl font-semibold'>{menu.price}</p>
                                            {/* <a href='#' className='underline'>More Info</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
});

export default OurMenu;
