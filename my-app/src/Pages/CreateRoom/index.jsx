import { Button, Form, Input, InputNumber, Select, Switch } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import React from 'react'
import { CreateRoomServices } from '../../services/RoomServices';

const CreateRoom = () => {
    const [form] = Form.useForm();

    const rules = { required: true, message: 'Please input your name!' };

    const handleSubmit = async (values) => {
        const response = await CreateRoomServices(values);
        if (response) {
            alert("Chúc mừng bạn đã thêm phòng thành công:");
            form.resetFields();
        } else {
            alert("Thêm phòng thất bại");
        }
    }

    return (
        <Form layout="vertical" name='create-room' onFinish={handleSubmit} form={form}>
            <h2 className='text-2xl '>Tạo phòng</h2>
            <Form.Item
                label="Tên phòng"
                name="name"
                rules={[rules]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Số lượng giường"
                name="quantityBed"
                rules={[rules]}
            >
                <InputNumber min={1} max={10} />
            </Form.Item>
            <Form.Item
                label="Số người tối đa"
                name="quantityPeople"
                rules={[rules]}
            >
                <InputNumber min={1} max={10} />
            </Form.Item>
            <Form.Item label="Mô tả" name="description">
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item name="utils" label="Dịch vụ" >
                <Select
                    mode="multiple"
                    allowClear
                    style={{
                        width: "100%",
                    }}
                    options={[
                        { value: 'Wifi', label: 'Wifi' },
                        { value: 'Nóng lạnh', label: 'Nóng lạnh' },
                        { value: 'Điều Hòa', label: 'Điều Hòa' },

                    ]} />
            </Form.Item>
            <Form.Item name="status" label="Trạng thái" valuePropName="checked" initialValue={true}>
                <Switch checkedChildren="Còn phòng" unCheckedChildren="Hết phòng" />
            </Form.Item>
            <Form.Item name="typeRooms" label="Loại phòng" valuePropName="checked" initialValue={true}>
                <Switch checkedChildren="VIP" unCheckedChildren="Thường" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Tạo phòng
                </Button>
            </Form.Item>
        </Form>
    )
}

export default CreateRoom 