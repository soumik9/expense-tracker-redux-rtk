import React from 'react';
import { Link } from "react-router-dom";

const Breadcrumb = ({ pageTitle, pageLink, secondLink, setIsOpen }) => {

    const currentPath = window.location.pathname;

    function openModal() {
        setIsOpen(true)
      }

    return (
        <div className='bg-white border shadow-lg p-3 rounded-lg text-black mb-5'>
            <div className='flex items-center justify-between'>
                <div>
                    <h4 className='md:text-[26px] text-[20px] font-semibold text-primary cursor-default'>{pageTitle}</h4>
                    <ul className='flex items-center gap-1 md:text-[16px] text-[14px] text-[#353b48] font-medium'>
                        <li className='hover:text-secondary'><Link to='/dashboard'>Dashboard</Link></li>
                        {secondLink && <li className={`hover:text-secondary ${currentPath === pageLink && 'text-primary'}`} ><Link to={pageLink}>/ {pageTitle}</Link></li>}
                    </ul>
                </div>
                <div>
                    <button
                        type='button'
                        onClick={openModal}
                        className='bg-primary hover:bg-secondary text-white p-[10px_18px] rounded-md transition ease-in-out duration-300 font-normal tracking-normal text-[14px] md:text-[16px]'
                    >
                        Add User
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;