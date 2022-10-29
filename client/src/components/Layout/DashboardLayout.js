import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
    return (
        <div className='grid grid-cols-[20%_80%] min-h-screen'>
            <Sidebar />

            <div>
                <Header />
                <div className='p-5'><Outlet /></div>
            </div>

        </div>
    );
};

export default DashboardLayout;