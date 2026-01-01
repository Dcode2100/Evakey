import React from "react";

interface ButtonWaveProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

const ButtonWave: React.FC<ButtonWaveProps> = ({ title, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-3 sm:px-8 sm:py-4 bg-primary text-white font-opensans font-semibold text-sm sm:text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${className}`}
    >
      <span className="relative z-10">{title}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
};

export default ButtonWave;

