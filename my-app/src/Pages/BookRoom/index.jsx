import { Button, Checkbox, Col, Row, Input, Space, DatePicker, Radio, Select } from 'antd';
import React, { useState } from 'react'
import { PostListBookRoom } from '../../services/BookRoomServices';
const { RangePicker } = DatePicker;

const BookRoom = () => {
    const [form, setform] = useState({
        time: "10 giờ"
    });

    const optionsTime = [];
    for (let i = 7; i < 24; i++) {
        optionsTime.push({
            value: i > 9 ? i + " giờ" : `0${i} giờ`,
            label: i > 9 ? i + " giờ" : `0${i} giờ`
        });
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        const object = {
            ...form,
            [e.target.name]: e.target.value
        }
        setform(object)
    }

    const handleChangeCheckbox = (e) => {
        const object = {
            ...form,
            services: e
        }
        setform(object)
    }
    const handleChangeTime = (e) => {
        const object = {
            ...form,
            time: e
        }
        setform(object)
    }
    const handleChangeDate = (e, dateString) => {
        const object = {
            ...form,
            date: dateString
        }
        setform(object)
    }
    const handleSubmit = async () => {
        const response = await PostListBookRoom(form);
        if (response) {
            alert("Chúc mừng bạn đã đặt hàng thành công:");
        } else {
            alert("Đặt hàng thất bại");
        }
    }
    return (
        <>
            <h2>Đặt phòng</h2>

            <form>
                <Row gutter={[20, 20]}>
                    <Col span={24}>
                        <p>Họ Tên</p>
                        <Input name='fullName' placeholder="Hoàng Văn A" onChange={handleChange} />
                    </Col>
                    <Col span={12}>
                        <p>Số điện thoại</p>
                        <Input name='phone' placeholder="0123456789" onChange={handleChange} />
                    </Col>
                    <Col span={12}>
                        <p>Email</p>
                        <Input name='email' placeholder="abc@gmail.com" onChange={handleChange} />
                    </Col>
                    <Col span={12}>
                        <p>Chọn ngày</p>
                        <RangePicker onChange={handleChangeDate} format="DD/MM/YYYY" placeholder={['Ngày nhận phòng', 'Ngày trả phòng']} />
                    </Col>
                    <Col span={12}>
                        <p>Giờ nhận phòng</p>
                        <Select
                            name='time'
                            defaultValue={form.time}
                            style={{ width: "100%" }}
                            options={optionsTime}
                            onChange={handleChangeTime}
                        />
                    </Col>
                    <Col span={12}>
                        <p>Dịch vụ thêm</p>
                        <Checkbox.Group name='services' onChange={handleChangeCheckbox}>
                            <Space orientation='vertical'>
                                <Checkbox value="Thuê xe máy">Thuê xe máy</Checkbox>
                                <Checkbox value="Thuê ô tô 4 chỗ">Thuê ô tô 4 chỗ</Checkbox>
                                <Checkbox value="Thuê ô tô 7 chỗ">Thuê ô tô 7 chỗ</Checkbox>
                                <Checkbox value="Thuê ô tô 16 chỗ">Thuê ô tô 16 chỗ</Checkbox>
                            </Space>
                        </Checkbox.Group>
                    </Col>
                    <Col span={12}>
                        <p>Quà tặng</p>
                        {/* dùng chung handleChange với input vì nó trả ra kiểu value giống nhau */}
                        <Radio.Group name='gift' onChange={handleChange}>
                            <Space orientation='vertical'>
                                <Radio value="Mũ">Mũ</Radio>
                                <Radio value="Áo phông">Áo phông</Radio>
                                <Radio value="Bình giữ nhiệt">Bình giữ nhiệt</Radio>
                                <Radio value="Túi vải">Túi vải</Radio>
                            </Space>
                        </Radio.Group>
                    </Col>
                    <Col span={24}>
                        <Button type='primary' onClick={handleSubmit}>Đặt phòng</Button>
                    </Col>

                </Row>
            </form>
        </>
    )
}

export default BookRoom;