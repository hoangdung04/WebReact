import React from 'react'
import { Badge, Button, Dropdown, Space } from 'antd';
import { BellOutlined } from '@ant-design/icons';
const items = [
    {
        label: (
            <div className="flex items-start gap-3 py-2 px-1 hover:bg-gray-50 transition-colors rounded-md cursor-pointer">
                <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                        <BellOutlined className="text-lg" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-sm font-semibold text-gray-800 m-0">You received a new message</h1>
                    <div className="text-xs text-gray-500 mt-0.5">8 phút trước</div>
                </div>
            </div>
        ),
        key: '0',
    },
    {
        label: (
            <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
                2nd menu item
            </a>
        ),
        key: '1',
    },
    {
        label: (
            <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
                1st menu item
            </a>
        ),
        key: '2',
    },
    {
        label: (
            <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
                1st menu item
            </a>
        ),
        key: '3',
    },

    {
        label: (
            <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
                1st menu item
            </a>
        ),
        key: '4',
    },

    {
        label: (
            <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
                1st menu item
            </a>
        ),
        key: '5',
    },

    {
        label: (
            <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
                1st menu item
            </a>
        ),
        key: '6',
    },

    {
        label: (
            <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
                1st menu item
            </a>
        ),
        key: '7',
    },

    {
        label: (
            <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
                1st menu item
            </a>
        ),
        key: '8',
    },

    {
        label: (
            <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
                1st menu item
            </a>
        ),
        key: '9',
    },

    {
        label: (
            <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
                1st menu item
            </a>
        ),
        key: '10',
    },

    {
        label: (
            <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
                1st menu item
            </a>
        ),
        key: '11',
    },



];

const Notify = () => {
    return (
        <Dropdown menu={{ items }} trigger={['click']} popupRender={menu => (
            <>
                <div className="bg-white rounded-lg shadow-xl w-[320px] overflow-hidden border border-gray-100">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                        <div className="font-semibold text-gray-700 text-base flex items-center gap-2">
                            <BellOutlined className="text-blue-500" /> Notification
                        </div>
                        <div className="text-sm text-blue-600 hover:text-blue-800 hover:underline font-medium cursor-pointer transition-colors">
                            View All
                        </div>
                    </div>
                    <div className="py-1 max-h-[200px] overflow-y-auto">
                        {menu}
                    </div>
                </div>
            </>
        )}>
            <a onClick={e => e.preventDefault()}>
                <Button type="text"  >
                    <Badge dot={true} className="!text-2xl !text-blue-500 hover:!text-red-500">
                        <BellOutlined />
                    </Badge>
                </Button>
            </a>
        </Dropdown>
    )
}

export default Notify