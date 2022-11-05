import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { useGetUsersQuery } from '../../features/users/usersApi';
import TableAction from '../../components/TableAction/TableAction';
import EditUser from './EditUser';

const UserTable = () => {

    // const dispatch = useDispatch();
    // const { users } = useSelector((state) => state.users)
    const { data: datas, isLoading, isError, isFetching } = useGetUsersQuery();

    // states
    const [modalData, setModalData] = useState(datas?.datas[0]);
    const [isEditOpen, setEditIsOpen] = useState(false);

    console.log(datas);

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Action',
            selector: row => <TableAction
                id={row._id}
                data={row}
                setEditIsOpen={setEditIsOpen}
                setModalData={setModalData}
            />,
            center: true
        },
    ];

    if (isError) return <div>Server error</div>

    return (
        <>
            <DataTable
                columns={columns}
                data={datas?.datas}
                progressPending={isLoading || isFetching}
                pagination
            />

            <EditUser
                isOpen={isEditOpen}
                setIsOpen={setEditIsOpen}
                prevData={modalData}
            />
        </>

    );
};

export default UserTable;