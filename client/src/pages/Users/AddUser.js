import React from 'react';
import Input from '../../components/Input/Input';
import Modal from '../../components/Modal/Modal';

const AddUser = ({ isOpen, setIsOpen }) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalTitle={'Add User'} className=''>

            <form action="" className='py-5 w-full'>
                <div className="w-full grid lg:grid-cols-2 md:grid-cols-1 gap-5">

                    <Input
                        id={'name'}
                        label={'Name'}
                        isRequired={true}
                    />

                    <Input
                        id={'email'}
                        type={'email'}
                        label={'Email'}
                        isRequired={true}
                    />

                </div>

                <div className='flex justify-end mt-[15px] '>
                    <button
                        type='submit'
                        className='bg-primary hover:bg-secondary text-white p-[10px_18px] rounded-md transition ease-in-out duration-300 font-normal tracking-normal text-[14px] md:text-[16px] w-[200px]'
                    >
                        Add User
                    </button>
                </div>

            </form>


        </Modal>
    );
};

export default AddUser;