import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const Dashboard = () => {
    return (
        <>
            <Breadcrumb pageTitle={'Dashboard'} pageLink={`/dashboard`} secondLink={false} />
            <h1 className='text-3xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi expedita, pariatur qui consequatur, impedit consequuntur sequi vero debitis doloribus quae quam voluptatem minima dolor totam vitae placeat? Ab, assumenda harum.</h1>
        </>
    );
};

export default Dashboard;