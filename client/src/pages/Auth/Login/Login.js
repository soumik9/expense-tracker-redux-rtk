import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ClassroomImage from '../../../assets/images/classroom.png';
import Button from '../../../components/Button/Button';
import { useLoginMutation } from '../../../features/auth/authApi';

const Login = () => {

    const [data, setData] = useState({ email: '', password: '' });

    // const [register, {data: getAPIData, isLoading, isError, error}] = useSignupMutation();
    const [login, {data: getAPIData, isLoading}] = useLoginMutation();


    // useEffect(() => {
    //     console.log(getAPIData)
    // }, [getAPIData])

    // useEffect(() => {
    //     if(getAPIData?.success === true){
    //         setIsOpen(false);
    //         setSelected(roles[0]);
    //         setData({ name: '', email: '', password: '', confirmPassword: '', role: roles[0] })
    //     }
    // }, [getAPIData?.success, setIsOpen])


    const handleLogin = (e) => {
        e.preventDefault();
        if(data.email === '' || data.password === '') return toast.error('All fields required');
        login(data);
    }

    return (
        <>
            <section className="h-full gradient-form bg-gray-200 md:h-screen mx-auto">
                <div className="mx-auto md:w-[35%] xl:w-[30%] flex items-center h-full" >
                    <div className="bg-white shadow-lg rounded-lg text-gray-800 w-full p-10">
                        <div className="text-center">
                            <img
                                className="mx-auto w-[150px] h-[150px]"
                                src={ClassroomImage}
                                alt="logo"
                            />
                            <h4 className="text-xl font-semibold mt-2 mb-12 pb-1">Online Classroom Management</h4>
                        </div>

                        <form onSubmit={handleLogin}> 
                            <div className="mb-4">
                                <input
                                    type="email"
                                    value={data?.email}
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="email"
                                    placeholder="soumik@gmail.com"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    value={data?.password}
                                    onChange={(e) => setData({ ...data, password: e.target.value })}
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput1"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="text-center pt-1 mb-12 pb-1">
                                <Button
                                    text={'Login'}
                                    alignment={'!py-[14px]'}
                                    loading={isLoading}
                                    loadingText={'Signing In'}
                                />
                                <a className="text-gray-500" href="#!">Forgot password?</a>
                            </div>
                            <div className="flex items-center justify-between pb-6">
                                <p className="mb-0 mr-2">Don't have an account?</p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;