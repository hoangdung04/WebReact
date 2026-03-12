import { useState } from 'react';
import { Layout } from 'antd';
import LearnGrid from '../components/LearnGrid';
import Notify from '../components/Notify'
import { MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined } from '@ant-design/icons';
import MenuSider from '../components/MenuSider';
import { Outlet } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;
function LayoutDefault() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Layout className="min-h-screen">
                <header className="bg-white border-b border-gray-200">
                    <div className='flex items-center h-[64px]'>
                        <div className={`logo h-full flex items-center justify-center border-r border-gray-200 transition-all ${collapsed ? 'w-[80px]' : 'w-[250px]'}`}>
                            <img src={collapsed ? "src/assets/logo-fold.png" : "src/assets/logo.png"} alt="logo" className="w-full h-full object-contain" />
                        </div>
                        <div className='flex items-center justify-between flex-1 px-6 text-xl transition-all'>
                            <div className='flex items-center gap-4'>
                                <span className="cursor-pointer" onClick={() => setCollapsed(!collapsed)}>
                                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                </span>
                                <SearchOutlined className="cursor-pointer" />
                            </div>
                            <div className='flex items-center gap-4'>
                                <Notify />

                            </div>
                        </div>
                    </div>
                </header>
                <Layout>
                    <Sider collapsed={collapsed} width="250px" theme="light" className="border-r border-gray-200">
                        <MenuSider />
                    </Sider>
                    <Content className="p-6 bg-gray-50"> <Outlet /></Content>
                </Layout>
                <Footer className="bg-white border-t border-gray-200 p-4 text-center">Footer</Footer>
            </Layout>

        </>
    )
}

export default LayoutDefault