import React from 'react'

const Hero = () => {
    return (
      <section className="relative flex items-center justify-center h-screen text-center text-white bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('https://static.wixstatic.com/media/2e2a49_649ed07c96b8440ca201c9128c0898ae~mv2.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-lg">
          <h2 className="text-4xl font-bold">Learn Anytime, Anywhere</h2>
          <p className="mt-4 text-lg">Join our online classes and get access to expert teachers, live sessions, and recorded lectures.</p>
          <button className="mt-6 bg-red-500 px-6 py-3 rounded-full text-lg font-bold">🚀 Enroll Now</button>
        </div>
      </section>
    );
  };
  

export default Hero
