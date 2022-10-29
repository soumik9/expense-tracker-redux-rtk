import React, {useState} from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import AddUser from './AddUser';

const Users = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Breadcrumb pageTitle={'Users'} pageLink={`/users`} secondLink={true} setIsOpen={setIsOpen} />
            
            <div className='bg-white border shadow-sm p-3 rounded-lg text-black mb-5'>
                hello
            </div>

            <AddUser isOpen={isOpen}setIsOpen={setIsOpen} />
        </>
    );
};

export default Users;