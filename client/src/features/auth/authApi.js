import { apiSlice } from "../api/apiSlice";
import { toast } from 'react-toastify';

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
                    // do nothing
                    console.log('Signup request failed');
                }
            }
        }),

        // login endpoint here
        login: builder.mutation({
            query: (data) => ({
                url: 'login',
                method: 'POST',
                body: data
            })
        })

    })
});

export const { useLoginMutation, useSignupMutation } = authApi;