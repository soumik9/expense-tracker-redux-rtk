import React from 'react';

const Input = ({ label, type, value, id, name, onChange, divCss, isRequired, }) => {
    return (
        <div className={`relative w-full mb-3 ${divCss}`}>
            <label className="block text-blueGray-600 text-sm font-bold mb-3" htmlFor={id}>
                {label}
            </label>
            <input
                type={type ? type : 'text'}
                name={name ? name : ''}
                id={id}
                value={value ? value : ''}
                onChange={onChange}
                required={isRequired}
                className="border border-gray-300 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow-sm outline-none focus:shadow w-full ease-linear transition-all duration-150"
                autoComplete='off'
                autoFocus={false}
            />
        </div>
    );
};

export default Input;