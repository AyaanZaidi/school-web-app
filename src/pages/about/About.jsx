import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            <motion.div
                className="bg-white p-6 rounded-xl shadow-lg max-w-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold text-purple-600 mb-3">About Us</h2>
                <p className="text-gray-600">
                    Welcome to our platform! We provide high-quality educational resources,
                    recorded lectures, and live classes to help you learn efficiently.
                </p>
            </motion.div>
        </div>
    );
};

export default About;
