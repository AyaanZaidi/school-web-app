import { LogOut } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [users, setUsers] = useState([
    { id: 1, name: "Ali Ahmed", role: "Student" },
    { id: 2, name: "Fatima Noor", role: "Teacher" },
    { id: 3, name: "Zain Malik", role: "Admin" },
  ]);
  return (
    <div
      className={`fixed top-0 right-0 flex flex-col items-center w-1/2 h-full bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-50`}
    >
      <button className="text-black text-center text-2xl p-4" onClick={toggleSidebar}>&times;</button>
      <ul className="flex flex-col items-center mt-10 space-y-9 text-2xl">
        <li className='hover:text-red-500 hover:transition-transform duration-700 hover:tracking-wider'><Link to="/" onClick={toggleSidebar}>Home</Link></li>
        <li className='hover:text-red-500 hover:transition-transform duration-700 hover:tracking-wider'><Link to="/about" onClick={toggleSidebar}>About</Link></li>
        <li className='hover:text-red-500 hover:transition-transform duration-700 hover:tracking-wider'><Link to="/recorded-lectures" onClick={toggleSidebar}>Courses</Link></li>
        <li className='hover:text-red-500 hover:transition-transform duration-700 hover:tracking-wider'><Link to="/contact" onClick={toggleSidebar}>Contact</Link></li>
        <div className="flex flex-col space-y-4">
          {
            users ? (<Link to='/login'
              className="w-full flex items-center gap-3 bg-red-500 text-white py-2 px-3 rounded-full hover:bg-red-600"
              onClick={() => alert("Logging out...")}
            >
              <LogOut size={20} /> Logout
            </Link>) :
              (
                <>
                  <Link to='/login' className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600" onClick={toggleSidebar}> Login</Link>
                  <Link to="/signup" className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600" onClick={toggleSidebar}>Signup</Link>
                </>
              )
          }
        </div>
      </ul>
    </div>
  );
};

export default Sidebar
