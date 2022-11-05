import { apiSlice } from "../api/apiSlice";
import { toast } from 'react-toastify';
// import { getAllUsers } from "./usersSlice";

export const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // all users endpoint here
        getUsers: builder.query({
            query: () => ({
                url: 'users',
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    // const result = await queryFulfilled;
                    await queryFulfilled;

                    // console.log('res', result);

                    // dispatch(getAllUsers({
                    //     users: result.data.data,
                    // }));

                    // toast.success(result.data.message);
                } catch (error) {
                    toast.error(error.error.data.error);
                }
            }
        }),

    })
});

export const { useGetUsersQuery } = usersApi;