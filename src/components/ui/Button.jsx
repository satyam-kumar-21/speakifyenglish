import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
      const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md transform active:scale-95";

      const variants = {
            primary: "bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 shadow-blue-500/30",
            secondary: "bg-teal-500 text-white hover:bg-teal-600 shadow-teal-500/30",
            outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
            white: "bg-white text-blue-900 hover:bg-gray-100 shadow-lg"
      };

      return (
            <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${baseStyles} ${variants[variant]} ${className}`}
                  {...props}
            >
                  {children}
            </motion.button>
      );
};

export default Button;
