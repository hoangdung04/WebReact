import React, { useEffect, useState, useCallback } from 'react';
import { GetListRoom } from '../../services/RoomServices';
import { Badge, Button, Card, Col, Row } from 'antd';
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';
import RoomGrid from './RoomGrid';
import RoomTable from './RoomTable';
const ListRoom = () => {
    const [rooms, setRooms] = useState([]);
    const [isGrid, setIsGrid] = useState(true);
    const fetchApi = useCallback(async () => {
        const response = await GetListRoom();
        if (response) {
            setRooms(response);

        }

    }, []);
    useEffect(() => {
        // eslint-disable-next-line
        fetchApi();
    }, [fetchApi]);
    const handleReload = () => {
        fetchApi();
    }
    return (
        <>
            <Button className='mb-4' onClick={() => setIsGrid(false)}> <UnorderedListOutlined /> </Button>
            <Button className='mb-4' onClick={() => setIsGrid(true)}> <AppstoreOutlined /> </Button>
            {isGrid ? (
                <RoomGrid rooms={rooms} />
            ) : (<>
                <RoomTable rooms={rooms} onReload={handleReload} />
            </>)}


        </>
    )
}

export default ListRoom;