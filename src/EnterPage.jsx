import React from 'react';
import { Link } from 'react-router-dom';

const EnterPage = () => {
  return (
    <div className="bg-gray-900 h-dvh flex justify-center items-center relative">
      {/* Particles Container */}
      <div className="particles-container">
        {/* Generate random particles */}
        <div className="particle" style={{ left: '10%', animationDelay: '0s' }}></div>
        <div className="particle" style={{ left: '50%', animationDelay: '0.5s' }}></div>
        <div className="particle" style={{ left: '70%', animationDelay: '1s' }}></div>
        <div className="particle" style={{ left: '20%', animationDelay: '1.2s' }}></div>
        <div className="particle" style={{ left: '30%', animationDelay: '1.5s' }}></div>
        <div className="particle" style={{ left: '40%', animationDelay: '2s' }}></div>
        <div className="particle" style={{ left: '60%', animationDelay: '2.3s' }}></div>
        <div className="particle" style={{ left: '80%', animationDelay: '2.5s' }}></div>
        <div className="particle" style={{ left: '25%', animationDelay: '3s' }}></div>
        <div className="particle" style={{ left: '55%', animationDelay: '3.2s' }}></div>
        <div className="particle" style={{ left: '75%', animationDelay: '3.5s' }}></div>
        <div className="particle" style={{ left: '15%', animationDelay: '3.8s' }}></div>
        <div className="particle" style={{ left: '35%', animationDelay: '4s' }}></div>
        <div className="particle" style={{ left: '50%', animationDelay: '4.5s' }}></div>
        <div className="particle" style={{ left: '65%', animationDelay: '5s' }}></div>
      </div>

      <div className="text-white text-center gap-5 flex flex-col phone:px-1 relative z-10">
        <p className="text-4xl phone:text-[1.5rem] font-press-start animate-fadeIn">
          WELCOME TO BIBLE ARENA
        </p>
        <p className="text-lg font-cursive animate-fadeIn animate-delay-200">
          This is a bible quiz game, click 'enter' to play. Enjoy!
        </p>
        <div>
          <Link to="/game">
            <button className="mt-8 px-8 py-4 phone:px-4 phone:text-[0.9rem] bg-yellow-400 rounded-xl font-press-start text-lg 
            transform hover:scale-105 transition-transform duration-200 
            border-b-4 border-yellow-600 hover:border-yellow-500 
            active:border-b-0 active:translate-y-1 shadow-lg 
            hover:shadow-yellow-300/50 bounce-on-hover animate-jump">
              ENTER GAME!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnterPage;
