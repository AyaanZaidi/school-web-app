import gsap from 'gsap';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({ isOpen, closeLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Registration logic here
    navigate('/home');  // Redirect to login page after successful registration
  };

  React.useEffect(() => {
    gsap.from('.login-form', { opacity: 0, y: -50, duration: 1, delay: 0.2 });
    gsap.from('.form-title', { opacity: 0, x: -50, duration: 1, delay: 0.4 });
  }, []);

  return (
    <div className={`fixed top-0 right-0 w-full h-full bg-white flex items-center justify-center transition-transform duration-300`}>
      {/* <button className="absolute top-5 right-5 text-2xl" onClick={closeLogin}>&times;</button> */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="login-form w-80 bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="form-title text-2xl mb-4">Login</h2>
          <input type="email" placeholder="Email" value={formData.email}
            onChange={handleChange} className="w-full p-2 mb-3 border rounded focus:ring-2 focus:ring-red-500 focus:outline-none" required />
          <input type="password" placeholder="Password" value={formData.password}
            onChange={handleChange} className="w-full p-2 mb-3 border rounded focus:ring-2 focus:ring-red-500 focus:outline-none" required />
          <button className="w-full bg-red-500 text-white py-2 rounded">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login
