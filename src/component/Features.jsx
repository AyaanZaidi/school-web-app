import React from 'react'
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <section className="py-16 bg-white flex flex-wrap justify-center gap-8">
      {[
        { title: "Live Classes", desc: "Interactive live sessions with expert teachers.", link: "/liveClasses" },
        { title: "Recorded Lectures", desc: "Access recorded lectures anytime for revision.", link: "/recorded-lectures" },
      ].map((feature, index) => (
        <Link key={index} to={feature.link || "/"} className="w-80 p-6 bg-white shadow-lg rounded-xl text-center hover:scale-x-75 hover:transition-transform duration-700">
            <h3 className="text-xl font-semibold text-purple-600">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.desc}</p>
        </Link>
      ))}
    </section>
  );
};

export default Features
