import React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
const items = [
    {
        key: '1',
        icon: <MailOutlined />,
        label: 'Navigation One',
        children: [
            { key: '/', label: <Link to="/">Dashboard</Link> },
            { key: '12', label: 'Option 2' },
            { key: '13', label: 'Option 3' },
            { key: '14', label: 'Option 4' },
        ],
    },
    {
        key: '2',
        icon: <AppstoreOutlined />,
        label: 'Navigation Two',
        children: [
            { key: '21', label: 'Option 1' },
            { key: '22', label: 'Option 2' },
            {
                key: '23',
                label: 'Submenu',
                children: [
                    { key: '231', label: 'Option 1' },
                    { key: '232', label: 'Option 2' },
                    { key: '233', label: 'Option 3' },
                ],
            },
            {
                key: '24',
                label: 'Submenu 2',
                children: [
                    { key: '241', label: 'Option 1' },
                    { key: '242', label: 'Option 2' },
                    { key: '243', label: 'Option 3' },
                ],
            },
        ],
    },
    {
        key: '3',
        icon: <SettingOutlined />,
        label: 'Navigation Three',
        children: [
            { key: '31', label: 'Option 1' },
            { key: '32', label: 'Option 2' },
            { key: '33', label: 'Option 3' },
            { key: '34', label: 'Option 4' },
        ],
    },
    {
        key: '/book-room',
        icon: <SettingOutlined />,
        label: <Link to="/book-room">Book Room</Link>,
    },
    {
        key: '/create-room',
        icon: <SettingOutlined />,
        label: <Link to="/create-room">Create Room</Link>,
    },
    {
        key: '/list-room',
        icon: <SettingOutlined />,
        label: <Link to="/list-room">List Room</Link>,
    }
];
const MenuSider = () => {
    return (
        <Menu
            mode="inline"
            defaultOpenKeys={['1']}
            defaultSelectedKeys={['/book-room']}
            items={items}

        />
    )
}

export default MenuSider