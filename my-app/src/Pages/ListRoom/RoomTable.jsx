import { Badge, Table, Tag, Tooltip } from 'antd';
import React from 'react'
import DeleteRoom from './DeleteRoom';
import EditRoom from './EditRoom';
const RoomTable = (props) => {
    const { rooms, onReload } = props
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
                return record.status ? <Tag color="success">Còn phòng</Tag> : <Tag color="error">Hết phòng</Tag>;
            }
        },
        {
            title: 'Loại phòng',
            dataIndex: 'typeRooms',
            key: 'typeRooms',
            render(_, record) {
                return record.typeRooms ? <Tooltip title="Phòng VIP chuẩn 5 sao" color="purple"> <Tag color="purple">VIP</Tag></Tooltip> : <Tooltip title="Phòng thường 3 sao" > <Tag color="error">Thường</Tag></Tooltip>;
            }
        },
        {
            title: 'Hành động',
            dataIndex: 'actions',
            key: 'id',
            render(_, record) {
                return <>
                    <DeleteRoom record={record} onReload={onReload} />
                    <EditRoom record={record} onReload={onReload} />
                </>;
            }
        },


    ];
    return (
        <>
            <Table dataSource={rooms} columns={columns} rowKey={"id"} />
        </>
    )
}

export default RoomTable