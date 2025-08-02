
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255, 0, 0, 0.2) 0%, transparent 30%), radial-gradient(circle at 80% 30%, rgba(255, 0, 0, 0.2) 0%, transparent 30%)',
        }}
      ></div>
      <svg className="absolute w-full h-full mix-blend-screen opacity-20" preserveAspectRatio="xMidYMid slice">
          <defs>
              <pattern id="dot-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="rgba(255, 255, 255, 0.5)"></circle>
              </pattern>
               <style>
                {`
                @keyframes move {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(-40px);
                    }
                }
                .moving-dots {
                    animation: move 2s linear infinite;
                }
                `}
               </style>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" className="moving-dots"></rect>
      </svg>
    </div>
  );
};

export default AnimatedBackground;
