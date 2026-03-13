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
        <div className="min-h-screen bg-gray-50 py-12 px-4 flex justify-center">
            <div className="bg-white w-full max-w-3xl rounded-3xl shadow-xl p-10">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-3xl font-black text-gray-800 uppercase tracking-tight">Đặt phòng</h2>
                    <div className="h-1 w-16 bg-blue-500 rounded-full mt-2"></div>
                </div>

                <form>
                    <Row gutter={[20, 20]}>
                        <Col span={24}>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Họ Tên</p>
                            <Input name='fullName' placeholder="Hoàng Văn A" onChange={handleChange} className="!rounded-xl !h-11" />
                        </Col>
                        <Col span={12}>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Số điện thoại</p>
                            <Input name='phone' placeholder="0123456789" onChange={handleChange} className="!rounded-xl !h-11" />
                        </Col>
                        <Col span={12}>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email</p>
                            <Input name='email' placeholder="abc@gmail.com" onChange={handleChange} className="!rounded-xl !h-11" />
                        </Col>
                        <Col span={12}>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Chọn ngày</p>
                            <RangePicker onChange={handleChangeDate} format="DD/MM/YYYY" placeholder={['Ngày nhận phòng', 'Ngày trả phòng']} className="!rounded-xl !h-11 w-full" />
                        </Col>
                        <Col span={12}>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Giờ nhận phòng</p>
                            <Select
                                name='time'
                                defaultValue={form.time}
                                style={{ width: "100%" }}
                                options={optionsTime}
                                onChange={handleChangeTime}
                                className="!rounded-xl !h-11 shadow-none"
                            />
                        </Col>

                        {/* Divider */}
                        <Col span={24}>
                            <div className="border-t border-gray-100 my-2"></div>
                        </Col>

                        <Col span={12}>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Dịch vụ thêm</p>
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
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Quà tặng</p>
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

                        <Col span={24} className="mt-4">
                            <Button
                                type='primary'
                                onClick={handleSubmit}
                                block
                                size="large"
                                className="!h-14 !rounded-2xl !text-base !font-bold !bg-gray-800 hover:!bg-gray-700 !border-none"
                            >
                                XÁC NHẬN ĐẶT PHÒNG
                            </Button>
                        </Col>
                    </Row>
                </form>
            </div>
        </div>
    )
}

export default BookRoom;