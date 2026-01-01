import React from 'react';

interface InputProps {
  label: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name: string;
  value: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ label, handleInputChange, className, name, value, type = "text" }) => {
    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-primary font-opensans">
                {label}
            </label>
            <input
                type={type}
                name={name}
                className={`w-full px-4 py-3 border-2 border-secondary/30 rounded-lg bg-white/80 backdrop-blur-sm text-primary font-opensans placeholder:text-secondary/60 focus:border-primary focus:outline-none transition-all duration-300 ${className || ''}`}
                onChange={handleInputChange}
                placeholder={label}
                value={value}
                required
            />
        </div>
    );
};

export default Input;

