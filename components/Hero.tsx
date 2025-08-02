import React from 'react';
import useScrollIntoView from '../hooks/useScrollIntoView';
import AnimatedBackground from './AnimatedBackground';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [targetRef] = useScrollIntoView<HTMLDivElement>();

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden p-4">
      <AnimatedBackground />
      <div ref={targetRef} className="z-10 scroll-target">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4">
          Hi, I'm Samuel Kojo Kporxah
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 mb-8">
          Network Engineer @ <span className="text-red-500">Telecel Ghana</span>
        </p>
        <Link
          to="/contact"
          className="inline-block bg-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/50"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default Hero;