import React from 'react';
import Logo from "../assets/Logo.png";
import { FaBars } from 'react-icons/fa';

const menu = [
  { id: 1, name: "Home", link: "#Home" },
  { id: 2, name: "Menu", link: "#Menu" },
  { id: 3, name: "About Us", link: "#AboutUs" },
  { id: 4, name: "Contact Us", link: "#ContactUs" },
  { id: 5, name: "Food Gallery", link: "#FoodGallery" },
];

const Navar = ({ foodGalleryRef, ourmenuRef, contactUsRef, aboutusRef }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleScrollToSection = (e, link) => {
    e.preventDefault();
    switch (link) {
      case "#AboutUs":
        if (aboutusRef.current) {
          aboutusRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "#FoodGallery":
        if (foodGalleryRef.current) {
          foodGalleryRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "#Menu":
        if (ourmenuRef.current) {
          ourmenuRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "#ContactUs":
        if (contactUsRef.current) {
          contactUsRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className='bg-yellow-300'>
      <div className='container py-1/2'>
        <div className='flex justify-between items-center'>
          <div data-aos='fade-down' data-aos-once='true'>
            <a href='#Home'>
              <img src={Logo} alt="Logo" className='w-16 h-16' />
            </a>
          </div>
          <div
            data-aos='fade-down'
            data-aos-once='true'
            data-aos-delay='300'
            className='hidden lg:flex justify-between items-center gap-4'
          >
            <ul className='flex space-x-4'>
              {menu.map((item) => (
                <li key={item.id}>
                  <a href={item.link} onClick={(e) => handleScrollToSection(e, item.link)} className="inline-block text-xl p-4 hover:bg-slate-100 hover:text-slate-700">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='lg:hidden'>
            <button
              data-aos='fade-down' 
              data-aos-once='true'
              data-aos-delay='300'
              onClick={handleOpen}
            >
              <FaBars className='text-3xl' />
            </button>
            {open && (
              <div>
                <ul className='bg-yellow-300 space-y-3 p-4 rounded-md shadow-md absolute right-10 top-20 z-50'>
                  {menu.map((item) => (
                    <li key={item.id}>
                      <a href={item.link} onClick={(e) => handleScrollToSection(e, item.link)} className="inline-block text-xl p-4 hover:bg-slate-100 hover:text-slate-700 w-full">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navar;
