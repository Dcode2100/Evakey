import React from 'react';

interface ModalProps {
  message: string;
  onClose: () => void;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ message, onClose, className }) => {
    return (
        <div className={`${className} fixed inset-0 flex items-center justify-center z-50`}>
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md flex justify-center flex-col items-center border border-secondary/20">
                <div className="w-16 h-16 bg-accent-1 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <p className="text-lg text-primary font-opensans text-center mb-6 leading-relaxed">{message}</p>
                <button 
                    onClick={onClose} 
                    className="px-6 py-3 bg-primary text-white font-opensans font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                    Okay
                </button>
            </div>
        </div>
    );
};

export default Modal;

