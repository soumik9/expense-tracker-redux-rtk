import React, { useEffect, useState } from 'react';
import Input from '../../components/Input/Input';
import Modal from '../../components/Modal/Modal';
import Select from '../../components/Select/Select';
import { roles } from '../../configs/constant';
import { useSignupMutation } from "../../features/auth/authApi"
import Button from '../../components/Button/Button';
import { useGetUsersQuery } from '../../features/users/usersApi';


const AddUser = ({ isOpen, setIsOpen }) => {

    const { refetch } = useGetUsersQuery();

    // states
    const [selected, setSelected] = useState(roles[0]);
    const [data, setData] = useState({ name: '', email: '', password: '', confirmPassword: '', role: selected.value });

    // const [register, {data: getAPIData, isLoading, isError, error}] = useSignupMutation();
    const [register, {data: getAPIData, isLoading}] = useSignupMutation();


    // setting role value to data
    useEffect(() => {
        setData({ ...data, role: selected.value });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected])

    useEffect(() => {
        if(getAPIData?.success === true){
            refetch();
            setIsOpen(false);
            setSelected(roles[0]);
            setData({ name: '', email: '', password: '', confirmPassword: '', role: roles[0] })
        }
    }, [getAPIData?.success, setIsOpen, refetch])

    // function
    const handleAddUser = (e) => {
        e.preventDefault();

        // if(data.password !== data.confirmPassword) return toast.error('Password not matched');

        // redux reducer
        register(data)
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalTitle={'Add User'} className=''>

            <form className='py-5 w-full' onSubmit={handleAddUser}>
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
                    <Button 
                        text={'Add User'}
                        loading={isLoading}
                        loadingText={'Adding'}
                        alignment={'md:w-[130px] w-full'}
                    />
                </div>

            </form>


        </Modal>
    );
};

export default AddUser;