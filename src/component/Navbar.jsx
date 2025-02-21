import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 p-4 flex justify-between items-center z-50">
      <Link to='/' className="unifrakturmaguntia-regular text-yellow-400 text-2xl font-bold">📚 Online Academy</Link>
      <button className="text-white text-2xl" onClick={toggleSidebar}>&#9776;</button>
    </nav>
  );
};

export default Navbar
