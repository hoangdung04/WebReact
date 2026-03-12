import { Badge, Table } from 'antd';
import React from 'react'
import DeleteRoom from './DeleteRoom';
const columns = [
    {
        title: 'Tên phòng',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Số người',
        dataIndex: 'quantityPeople',
        key: 'quantityPeople',
    },
    {
        title: 'Số giường',
        dataIndex: 'quantityBed',
        key: 'quantityBed',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        render(_, record) {
            return record.status ? <Badge status="success" text="Còn phòng" /> : <Badge status="error" text="Hết phòng" />;
        }
    },
    {
        title: 'Loại phòng',
        dataIndex: 'typeRooms',
        key: 'typeRooms',
        render(_, record) {
            return record.typeRooms ? <Badge status="success" text="VIP" /> : <Badge status="error" text="Thường" />;
        }
    },
    {
        title: 'Hành động',
        dataIndex: 'actions',
        key: 'id',
        render(_, record) {
            return <DeleteRoom record={record} />;
        }
    },


];

const RoomTable = (props) => {
    const { rooms } = props
    return (
        <>
            <Table dataSource={rooms} columns={columns} rowKey={"id"} />
        </>
    )
}

export default RoomTable