import { Button, Card, Col, Form, Input, InputNumber, message, Row, Select, Switch } from 'antd'
import React from 'react'
import { CreateRoomServices } from '../../services/RoomServices';

const CreateRoom = () => {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = async (values) => {
        const response = await CreateRoomServices(values);
        if (response) {
            messageApi.success('Thêm phòng thành công');
            form.resetFields();
        } else {
            messageApi.error('Thêm phòng thất bại');
        }
    }

    return (
        <>
            {contextHolder}
            <Card title="Tạo phòng mới" style={{ maxWidth: 800, margin: '0 auto' }}>
                <Form layout="vertical" onFinish={onFinish} form={form} initialValues={{ status: true, typeRooms: false }}>
                    <Form.Item label="Tên phòng" name="name" rules={[{ required: true, message: 'Vui lòng nhập tên phòng!' }]}>
                        <Input placeholder="Nhập tên phòng..." />
                    </Form.Item>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Số lượng giường" name="quantityBed" rules={[{ required: true, message: 'Bắt buộc' }]}>
                                <InputNumber min={1} max={10} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Số người tối đa" name="quantityPeople" rules={[{ required: true, message: 'Bắt buộc' }]}>
                                <InputNumber min={1} max={10} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item label="Mô tả" name="description">
                        <Input.TextArea rows={4} placeholder="Nhập mô tả chi tiết về phòng..." />
                    </Form.Item>

                    <Form.Item name="utils" label="Dịch vụ">
                        <Select
                            mode="multiple"
                            allowClear
                            placeholder="Chọn dịch vụ đi kèm"
                            options={['Wifi', 'Nóng lạnh', 'Điều Hòa'].map(v => ({ value: v, label: v }))}
                        />
                    </Form.Item>

                    <Row gutter={32}>
                        <Col>
                            <Form.Item name="status" label="Trạng thái" valuePropName="checked">
                                <Switch checkedChildren="Còn phòng" unCheckedChildren="Hết phòng" />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="typeRooms" label="Loại phòng" valuePropName="checked">
                                <Switch checkedChildren="VIP" unCheckedChildren="Thường" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item style={{ marginTop: 20 }}>
                        <Button type="primary" htmlType="submit" block size="large">
                            Tạo phòng
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </>
    )
}

export default CreateRoom 