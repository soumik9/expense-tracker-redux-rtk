import React from 'react';

const Login = () => {
    return (
        <>
            <section className="h-full gradient-form bg-gray-200 md:h-screen">
                <div className="container py-12 px-6 h-full">

                    <div className="h-full md:w-[35%] mx-auto flex items-center">

                        <div className="bg-white shadow-lg rounded-lg text-gray-800 w-full p-10">
                            <div className="text-center">
                                <img
                                    className="mx-auto w-48"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                    alt="logo"
                                />
                                <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">Online Classroom Management</h4>
                            </div>

                            <form>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput1"
                                        placeholder="Username"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="password"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput1"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="text-center pt-1 mb-12 pb-1">
                                    <button
                                        className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        style={{ background: `linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593 )` }}
                                    >
                                        Log in
                                    </button>
                                    <a className="text-gray-500" href="#!">Forgot password?</a>
                                </div>
                                <div className="flex items-center justify-between pb-6">
                                    <p className="mb-0 mr-2">Don't have an account?</p>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Login;