import { apiSlice } from "../api/apiSlice";
import { toast } from 'react-toastify';
// import { getAllUsers } from "./usersSlice";

export const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // all users endpoint here
        getUsers: builder.query({
            query: () => 'users',
            keepUnusedDataFor: 600,
            providesTags: ['Users'],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    toast.error(error.error.data.message);
                }
            }
        }),

        editUser: builder.mutation({
            query: ({ id, data }) => ({
                url: `user/${id}`,
                method: 'PATCH',
                body: data,
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

    })
});

export const { useGetUsersQuery, useEditUserMutation } = usersApi;