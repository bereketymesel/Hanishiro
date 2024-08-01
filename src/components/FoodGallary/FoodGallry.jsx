import React from 'react';
import beyaynet from '../../assets/beyaynet.png';
import dabofirfir from '../../assets/Bannerimg.jpg';
import Enkulalfirfir from '../../assets/Enkulalfirfir.jpg';
import specialAynet from '../../assets/heropng.jpg';
import tegamino from '../../assets/img1.jpg';
import pasta from '../../assets/Pasta.jpg';

const FoodGallery = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="container py-20 bg-yellow-400">
      <h2 className="text-3xl font-bold mb-10 text-center">Food Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Example food items, replace with actual data */}
        <div className="bg-gray-200 p-4 rounded-lg">
          <img src={beyaynet} alt="Beyaynet" className="w-full h-40 object-cover rounded-lg mb-2" />
          <p className="text-center font-semibold">Beyaynet</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <img src={dabofirfir} alt="Dabo Firfir" className="w-full h-40 object-cover rounded-lg mb-2" />
          <p className="text-center font-semibold">Dabo Firfir</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <img src={Enkulalfirfir} alt="Enkulal Firfir" className="w-full h-40 object-cover rounded-lg mb-2" />
          <p className="text-center font-semibold">Enkulal Firfir</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <img src={specialAynet} alt="Special Aynet" className="w-full h-40 object-cover rounded-lg mb-2" />
          <p className="text-center font-semibold">Special Aynet</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <img src={tegamino} alt="Tegamino" className="w-full h-40 object-cover rounded-lg mb-2" />
          <p className="text-center font-semibold">Tegamino</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <img src={pasta} alt="Pasta" className="w-full h-40 object-cover rounded-lg mb-2" />
          <p className="text-center font-semibold">Pasta</p>
        </div>
        {/* Add more food items as needed */}
      </div>
    </div>
  );
});

export default FoodGallery;
