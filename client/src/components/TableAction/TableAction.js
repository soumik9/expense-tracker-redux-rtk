import React from 'react';
import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'

const TableAction = ({ 
    // id, 
    data, 
    // handleEdit, 
    // handleDelete, 
    setEditIsOpen, 
    setModalData 
}) => {
    return (
        <div className='text-[20px] flex items-center gap-[4px]'>
            <button
                type='button'
                className='text-[#f1c40f] hover:text-[#f39c12] transition duration-300 ease-in-out'
                onClick={() => {
                    setEditIsOpen(true)
                    setModalData(data)
                    // handleEdit(id)
                }}
            >
                <BiEdit />
            </button>
            <button
                type='button'
                className='text-[#c0392b] hover:text-[#e74c3c] transition duration-300 ease-in-out'
                onClick={() => {
                    // handleDelete()
                } }
            >
                <AiOutlineDelete />
            </button>
        </div>
    );
};

export default TableAction;