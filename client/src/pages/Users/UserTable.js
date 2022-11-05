import React from 'react';
import DataTable from 'react-data-table-component';
import { useGetUsersQuery } from '../../features/users/usersApi';

const UserTable = () => {

    // const dispatch = useDispatch();
    // const { users } = useSelector((state) => state.users)
    const {data: datas, isLoading, isError, isFetching} = useGetUsersQuery({ refetchOnFocus: true });
 


    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
    ];

    if(isError) return <div>Server error</div>
    
    return (
        <DataTable
            columns={columns}
            data={datas?.datas}
            progressPending={isLoading || isFetching}
            pagination 
        />
    );
};

export default UserTable;