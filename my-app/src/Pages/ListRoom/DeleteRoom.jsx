import { DeleteOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import React from 'react'
import { DeleteRoomServices } from '../../services/RoomServices';

const DeleteRoom = (props) => {
    const { record } = props;
    const handleDelete = async (id) => {
        const response = await DeleteRoomServices(id);
        if (response) {
            alert("Xóa phòng thành công");
        } else {
            alert("Xóa phòng thất bại");
        }
    }
    return (
        <>
            <Popconfirm title="Bạn có chắc muốn xóa" onConfirm={() => handleDelete(record.id)}>
                <Button type="primary" icon={<DeleteOutlined />} danger />
            </Popconfirm>
        </>
    )
}

export default DeleteRoom