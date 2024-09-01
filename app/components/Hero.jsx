'use client'
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export function HeroSection() {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [" I'm Divine Nnaji", "I'm A Web Developer", "I'm A Mobile App Developer"],
      typeSpeed: 70,
      backSpeed: 40,
      loop: 2,
    };

    // Initialize Typed.js
    const typed = new Typed(typedElement.current, options);

    // Destroy Typed.js instance on unmount to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="hero bg-base-200 w-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ x: [0, -2, 0], opacity: [0.9, 1], scale: [0.8, 1] }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="hero-content flex flex-col lg:flex-row items-center"
      >
        <img
          src="/profilepic2.jpeg"
          className="max-w-48 rounded-full shadow-2xl border-[4px] mask mask-hexagon-2"
        />
        <div>
          <h1 className="text-4xl font-extrabold font-serif bg-clip-text bg-gradient-to-r from-orange-600 via-violet-600 to-pink-800 text-transparent">
            <span ref={typedElement} />
          </h1>
          <p className="py-6 text-slate-300 font-serif font-bold">
            I'm a creative freelance frontend developer specializing in modern, responsive web design. With a keen eye for detail and expertise modern web and app practices I bring your digital visions to life. 
          </p>
          <div className="flex space-x-3">
          <a className="btn btn-sm text-orange-500 rounded-full glass py-[2px] text-sm font-serif">Get Started</a>
          <a className="btn btn-sm text-orange-500 rounded-full glass py-[2px] text-sm font-serif" >CV</a>
        
          </div>
        </div>
      </motion.div>
    </div>
  );
}
