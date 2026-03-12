import React, { useEffect, useState } from 'react';
import { GetListRoom } from '../../services/RoomServices';
import { Badge, Button, Card, Col, Row } from 'antd';
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';
import RoomGrid from './RoomGrid';
import RoomTable from './RoomTable';
const ListRoom = () => {
    const [rooms, setRooms] = useState([]);
    const [isGrid, setIsGrid] = useState(true);
    useEffect(() => {

        const fetchApi = async () => {
            const response = await GetListRoom();
            if (response) {
                setRooms(response);

            }
            console.log(response);
        }
        fetchApi();
    }, []);
    return (
        <>
            <Button className='mb-4' onClick={() => setIsGrid(false)}> <UnorderedListOutlined /> </Button>
            <Button className='mb-4' onClick={() => setIsGrid(true)}> <AppstoreOutlined /> </Button>
            {isGrid ? (
                <RoomGrid rooms={rooms} />
            ) : (<>
                <RoomTable rooms={rooms} />
            </>)}


        </>
    )
}

export default ListRoom;