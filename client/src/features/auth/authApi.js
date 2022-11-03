import { apiSlice } from "../api/apiSlice";
import { toast } from 'react-toastify';
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // register endpoint here
        signup: builder.mutation({
            query: (data) => ({
                url: 'signup',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    toast.success(result.data.message);
                } catch (error) {
                    toast.error(error.error.data.message);
                }
            }
        }),

        // login endpoint here
        login: builder.mutation({
            query: (data) => ({
                url: 'login',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    toast.success(result.data.message);

                    // console.log('res', result.data.data.user);
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.data.accessToken,
                            user: result.data.data.user,
                            // isAdmin: result.data.data.role === 'admin' ? true : false,
                            // isTeacher: result.data.data.role === 'teacher' ? true : false,
                            // isStudent: result.data.data.role === 'student' ? true : false,
                            // isAuthenticated: true,
                        })
                    );

                    // setting logged data to redux state
                    dispatch(userLoggedIn({
                        accessToken: result.data.data.accessToken,
                        user: result.data.data.user,
                    }));
                } catch (error) {
                    toast.error(error?.error?.data.message);
                }
            }
        })

    })
});

export const { useSignupMutation, useLoginMutation } = authApi;