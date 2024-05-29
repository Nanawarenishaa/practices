import { useState } from 'react';
import { CgMenuRightAlt, CgClose } from 'react-icons/cg';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full p-4 px-8 bg-slate-900 flex justify-between  items-center fixed z-10">
      <div className="flex items-center gap-2">
        <img src="logo.png" alt="" className="h-10" />
        <h2 className="text-2xl font-bold text-white">Spering</h2>
      </div>
      <div className="hidden md:flex">
        <a href="/" className="text-white hover:text-gray-300 mx-4">Home</a>
        <a href="/about" className="text-white hover:text-gray-300 mx-4">About</a>
        <a href="/category" className="text-white hover:text-gray-300 mx-4">Category</a>
        <a href="/work" className="text-white hover:text-gray-300 mx-4">Work</a>
        <a href="/testimonial" className="text-white hover:text-gray-300 mx-4">Testimonial</a>
      </div>
      <div className="md:hidden text-white font-bold text-4xl" onClick={toggleMenu}>
        {isMenuOpen ? <CgClose className='text-white' /> : <CgMenuRightAlt />}
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-[60vh] mt-16 bg-gray-900 bg-opacity-90 ">
          <div className="flex flex-col items-center p-8 gap-4 mt-4">
            <a href="/" className="text-white text-center text-2xl w-full py-2 hover:bg-grey-700">Home</a>
            <a href="/about" className="text-white text-center text-2xl w-full py-2 hover:bg-grey-700">About</a>
            <a href="/category" className="text-white text-center text-2xl w-full py-2 hover:bg-grey-700">Category</a>
            <a href="/work" className="text-white text-center text-2xl w-full py-2 hover:bg-grey-700">Work</a>
            <a href="/testimonial" className="text-white text-center text-2xl w-full py-2 hover:bg-grey-700">Testimonial</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

