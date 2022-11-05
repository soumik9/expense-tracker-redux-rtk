import React, { useState } from 'react';
import { BiSearch, BiBell } from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userLoggedOut } from '../../features/auth/authSlice';

const Header = () => {

  const dispatch = useDispatch();

  // states
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(userLoggedOut());
    localStorage.clear();
    toast.success('Signout Success');
  }



  return (
    // <div className="h-16 bg-white shadow-sm pl-80 pr-8 fixed w-full top-0 left-0 flex items-center">
    <div className="h-16 bg-white shadow-sm w-full flex items-center px-5">

      <div className='relative'>
        <BiSearch className='absolute left-2 top-[9px] w-6 text-gray-400 text-[22px]' />
        <input type="text" className='block w-72 shadow border-none rounded-3xl focus:outline-none py-2 bg-gray-100 text-base text-gray-600 pl-11 pr-2' />
      </div>

      <div className="ml-auto flex items-center">

        <BiBell className='w-6 cursor-pointer text-gray-600 hover:text-gray-900 text-[22px]' />

        <div className="ml-4 relative top-[2px]">

          <img className='rounded-full object-cover cursor-pointer' src={'https://ui-avatars.com/api/?name=Soumik+Ahammed'} width={32} height={32} alt={'profile'} onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)} />

          <div className={`${!isProfileDropdownOpen && 'hidden'} absolute z-50 mt-2 rounded-md shadow-lg w-48 right-0 py-1 bg-white`}>

            <div className='px-4 py-2 text-xs text-gray-400'>Manage Account</div>

            <Link to='/' className='block text-sm leading-5 text-gray-700 hover:bg-gray-100 transition px-4 py-2'>Profile</Link>
            <div className="border-t border-gray-100"></div>

            <button
              // type='button'
              onClick={handleLogout}
              className='block text-sm leading-5 text-gray-700 hover:bg-gray-100 transition px-4 py-2 cursor-pointer'
            >
              Logout
            </button>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Header;