import React from 'react';

const Button = ({ text, loading, type, alignment, loadingText }) => {
    return (
        <button
            className={`px-6 py-2.5 text-white text-base leading-tight uppercase rounded shadow-md focus:outline-none focus:ring-0 active:shadow-lg w-full mb-3 disabled:bg-[#cccccc] disabled:text-[#666666] bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l transition-all duration-150 ease-in-out font-normal tracking-normal ${alignment}`}
            type={type ? 'type' : 'submit'}
            disabled={loading}
        >
            {loading ? <div className='flex items-center justify-center gap-2'>
                <span className="loader"></span>
                <span className='text-white'>{loadingText}</span>
            </div> :
                text}
        </button>
    );
};

export default Button;