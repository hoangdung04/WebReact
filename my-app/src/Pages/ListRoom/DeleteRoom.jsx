import { DeleteOutlined } from '@ant-design/icons';
import { Button, Popconfirm, message } from 'antd';
import React from 'react'
import { DeleteRoomServices } from '../../services/RoomServices';

const DeleteRoom = ({ record, onReload }) => {
    const [messageApi, contextHolder] = message.useMessage();

    const handleDelete = async (id) => {
        const response = await DeleteRoomServices(id);
        if (response) {
            messageApi.success("Xóa phòng thành công");
            onReload();
        } else {
            messageApi.error("Xóa phòng thất bại");
        }
    }

    return (
        <>
            {contextHolder}
            <Popconfirm title="Bạn có chắc muốn xóa?" onConfirm={() => handleDelete(record.id)}>
                <Button type="primary" ghost danger icon={<DeleteOutlined />} />
            </Popconfirm>
        </>
    )
}

export default DeleteRoom