import React from 'react';
import CircleLoading from '../CircleLoading/CircleLoading';

const Button = ({ text, loading, type, alignment }) => {
    return (
        <button
            className={`px-6 py-2.5 text-white font-medium text-base leading-tight uppercase rounded shadow-md focus:outline-none focus:ring-0 active:shadow-lg w-full mb-3 disabled:bg-[#cccccc] disabled:text-[#666666] bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l transition-all duration-150 ease-in-out ${alignment}`}
            type={type ? 'type' : 'submit'}
            disabled={loading}
        >
           {loading ? <CircleLoading /> + text : text}
        </button>
    );
};

export default Button;