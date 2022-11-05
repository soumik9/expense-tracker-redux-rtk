import React, { useEffect, useState } from 'react';
import Input from '../../components/Input/Input';
import Modal from '../../components/Modal/Modal';
import Select from '../../components/Select/Select';
import { roles } from '../../configs/constant';
import Button from '../../components/Button/Button';
import { useEditUserMutation } from '../../features/users/usersApi';


const EditUser = ({ isOpen, setIsOpen, prevData }) => {

    const [editUser, {data: getAPIData, isLoading}] = useEditUserMutation();

    // states
    const [selected, setSelected] = useState(roles[0]);
    let [data, setData] = useState({ name: '', email: '' });
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

    // set default data
    useEffect(() => {
        setData({ name: prevData?.name, email: prevData?.email });
        setSelected(roles?.find((item) => item.value === prevData?.role))
    }, [prevData])

    useEffect(() => {
        if(getAPIData?.success === true){
            setIsOpen(false);
        }
    }, [getAPIData?.success, setIsOpen])

    // function
    const handleEditUser = (e) => {
        e.preventDefault();
        data = { ...data, password: password, confirmPassword: confirmPassword, role: selected.value }
        console.log(data);

        editUser({id: prevData?._id, data})
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalTitle={'Edit User'} className=''>

            <form className='py-5 w-full' onSubmit={handleEditUser}>
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
                        isDisabled={true}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                    />

                    <Input
                        id={'password'}
                        type={'password'}
                        label={'Password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Input
                        id={'confirmPassword'}
                        type={'password'}
                        label={'Confrim Password'}
                        value={confirmPassword}
                        isRequired={password}
                        onChange={(e) => setconfirmPassword(e.target.value)}
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
                        text={'Update'}
                        loading={isLoading}
                        loadingText={'Updating'}
                        alignment={'md:w-[130px] w-full'}
                    />
                </div>

            </form>


        </Modal>
    );
};

export default EditUser;