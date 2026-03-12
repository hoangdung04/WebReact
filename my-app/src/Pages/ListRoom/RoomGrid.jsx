import { Badge, Card, Col, Row } from 'antd'
import React from 'react'

const RoomGrid = (props) => {
    const { rooms } = props;
    return (
        <Row gutter={[20, 20]}>
            {rooms.map(item => (
                <Col span={12} key={item.id}>

                    <Badge.Ribbon text={item.typeRooms ? "VIP" : "Thường"} color={item.typeRooms ? "purple" : "blue"}>
                        <Card title={`Phòng: ${item.name} `}>
                            <p>Số người: <strong>{item.quantityPeople}</strong></p>
                            <p>Số giường: <strong>{item.quantityBed}</strong></p>
                            <p>Trạng thái: {item.status ? (<Badge status="success" text="Còn phòng" />) : (<Badge status="error" text="Hết phòng" />)}</p>

                        </Card>


                    </Badge.Ribbon>


                </Col>
            ))}
        </Row>
    )
}

export default RoomGrid