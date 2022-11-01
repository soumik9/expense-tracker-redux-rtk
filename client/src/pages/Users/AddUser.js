import React, { useEffect, useState } from 'react';
import Input from '../../components/Input/Input';
import Modal from '../../components/Modal/Modal';
import Select from '../../components/Select/Select';
import { roles } from '../../configs/constant';


const AddUser = ({ isOpen, setIsOpen }) => {

    // states
    const [selected, setSelected] = useState(roles[0]);
    const [data, setData] = useState({ name: '', email: '', password: '', confirmPassword: '', role: selected.value });

    // setting role value to data
    useEffect(() => {
        setData({ ...data, role: selected.value });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected])

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalTitle={'Add User'} className=''>

            <form action="" className='py-5 w-full'>
                <div className="w-full grid lg:grid-cols-2 md:grid-cols-1 gap-x-9 gap-y-3">

                    <Input
                        id={'name'}
                        label={'Name'}
                        value={data?.name}
                        isRequired={true}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                    />

                    <Input
                        id={'email'}
                        type={'email'}
                        label={'Email'}
                        value={data?.email}
                        isRequired={true}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                    />

                    <Input
                        id={'password'}
                        type={'password'}
                        label={'Password'}
                        value={data?.password}
                        isRequired={true}
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                    />

                    <Input
                        id={'confirmPassword'}
                        type={'password'}
                        label={'Confrim Password'}
                        value={data?.confirmPassword}
                        isRequired={true}
                        onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
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