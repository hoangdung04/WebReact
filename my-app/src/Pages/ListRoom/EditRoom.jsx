import { Button, Form, InputNumber, Modal, Select, Spin, Switch, Input, message } from 'antd'
import React, { useState } from 'react'
import { EditOutlined } from '@ant-design/icons'
import { EditRoomServices } from '../../services/RoomServices';

const EditRoom = ({ record, onReload }) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = async (values) => {
        setLoading(true);
        // Giả lập gọi API mất 3 giây
        await new Promise(resolve => setTimeout(resolve, 3000));
        const response = await EditRoomServices(record.id, values);
        setLoading(false);
        if (response) {
            messageApi.success('Cập nhật phòng thành công');
            setOpen(false);
            onReload();
        } else {
            messageApi.error('Cập nhật phòng thất bại');
        }
    };

    return (
        <>
            {contextHolder}
            <Button type='primary' ghost icon={<EditOutlined />} onClick={() => setOpen(true)} />
            <Modal
                open={open}
                title="Chỉnh sửa phòng"
                footer={null}
                onCancel={() => setOpen(false)}
                destroyOnHidden
            >
                <Spin spinning={loading} tip="Đang cập nhật...">
                    <Form layout="vertical" form={form} onFinish={onFinish} initialValues={record}>
                        <Form.Item label="Tên phòng" name="name" rules={[{ required: true, message: 'Bắt buộc' }]}>
                            <Input />
                        </Form.Item>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                            <Form.Item label="Số giường" name="quantityBed" rules={[{ required: true }]}>
                                <InputNumber min={1} style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item label="Số người" name="quantityPeople" rules={[{ required: true }]}>
                                <InputNumber min={1} style={{ width: '100%' }} />
                            </Form.Item>
                        </div>
                        <Form.Item label="Mô tả" name="description">
                            <Input.TextArea rows={3} />
                        </Form.Item>
                        <Form.Item name="utils" label="Dịch vụ">
                            <Select mode="multiple" allowClear options={['Wifi', 'Nóng lạnh', 'Điều Hòa'].map(v => ({ value: v, label: v }))} />
                        </Form.Item>
                        <div style={{ display: 'flex', gap: '30px', marginBottom: '15px' }}>
                            <Form.Item name="status" label="Trạng thái" valuePropName="checked" noStyle>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span>Trạng thái:</span>
                                    <Form.Item name="status" valuePropName="checked" noStyle><Switch checkedChildren="Còn" unCheckedChildren="Hết" /></Form.Item>
                                </div>
                            </Form.Item>
                            <Form.Item name="typeRooms" label="Loại phòng" valuePropName="checked" noStyle>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span>Loại:</span>
                                    <Form.Item name="typeRooms" valuePropName="checked" noStyle><Switch checkedChildren="VIP" unCheckedChildren="Thường" /></Form.Item>
                                </div>
                            </Form.Item>
                        </div>
                        <Button type="primary" htmlType="submit" block loading={loading}>
                            Cập nhật
                        </Button>
                    </Form>
                </Spin>
            </Modal>
        </>
    )
}

export default EditRoom
