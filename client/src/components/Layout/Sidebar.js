import React from 'react';
import { BiHomeSmile } from 'react-icons/bi'
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="h-full bg-gray-800 shadow-md">

            <div className='text-white font-semibold tracking-wide text-[18px] text-base text-center py-5 bg-gray-500 h-[62px]'>
                Online Classroom
            </div>

            <div className="py-5 mt-1">
                <Link to='/dashboard' className='flex items-center my-1 px-4 py-3 text-white border-l-4 border-blue-600 bg-gray-900'>
                    <BiHomeSmile className='w-5 mr-3' />
                    Dashboard
                </Link>

                <Link to='/users' className='flex items-center my-1 px-4 py-3 text-white border-l-4 hover:border-blue-600 hover:bg-gray-900 border-transparent transition'>
                    <BiHomeSmile className='w-5 mr-3' />
                    Users
                </Link>
            </div>

        </div>
    );
};

export default Sidebar;