import React, { useState } from 'react';
// import './Register.css';  // If you want to include any custom styles
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
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
    navigate('/login');  // Redirect to login page after successful registration
  };

  // GSAP Animation on component mount
  React.useEffect(() => {
    gsap.from('.register-form', { opacity: 0, y: -150, duration: 1, delay: 0.2 });
    gsap.from('.form-title', { opacity: 0, x: -50, duration: 1, delay: 0.4 });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="register-form p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="form-title text-3xl font-bold text-gray-800 text-center mb-8">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>
          <button type="submit" className="w-full py-3 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition duration-300">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
