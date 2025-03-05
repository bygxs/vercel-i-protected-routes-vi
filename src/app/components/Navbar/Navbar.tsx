// components/Navbar.js

"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">MyLogo</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="#" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="#" className="text-gray-300 hover:text-white">About</Link>
          <Link href="#" className="text-gray-300 hover:text-white">Services</Link>
          <Link href="#" className="text-gray-300 hover:text-white">Contact</Link>
          </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white">
            {/* Hamburger Icon */}
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 mt-2">
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
            <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
            <Link href="/services" className="text-gray-300 hover:text-white">Services</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
