import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import Modal from '../../components/Modal/Modal';
import Select from '../../components/Select/Select';

const roles = [
    { name: 'Select', value: '' },
    { name: 'Admin', value: 'admin' },
    { name: 'Teacher', value: 'teacher' },
    { name: 'Student', value: 'student' },
  ]

const AddUser = ({ isOpen, setIsOpen }) => {

    const [selected, setSelected] = useState(roles[0])

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalTitle={'Add User'} className=''>

            <form action="" className='py-5 w-full'>
                <div className="w-full grid lg:grid-cols-2 md:grid-cols-1 gap-x-9 gap-y-3">

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

                    <Input
                        id={'password'}
                        type={'password'}
                        label={'Password'}
                        isRequired={true}
                    />

                    <Input
                        id={'confirmPassword'}
                        type={'password'}
                        label={'Confrim Password'}
                        isRequired={true}
                    />

                    <Select 
                        label={'Role'}
                        datas={roles}
                        selected={selected}
                        setSelected={setSelected}
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