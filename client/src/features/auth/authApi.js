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
            invalidatesTags: ["Users"],
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