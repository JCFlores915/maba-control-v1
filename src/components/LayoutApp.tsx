import { useState } from 'react';
import { Layout, Button, Dropdown } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  BankOutlined,
  UserOutlined,
  MailOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import logo from '../assets/logo.png'; // Adjust the path as necessary
import ThemeToggle from './ThemeToggle';
import type { MenuProps } from 'antd';
import SidebarMenu from './SidebarMenu';
const { Header, Content, Sider } = Layout;

const LayoutApp = () => {
  const [collapsed, setCollapsed] = useState(true);
  const { logout } = useAuth();

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <span>
          <span>
            <UserOutlined style={{ marginRight: 4 }} />
            Juan Flores
          </span>
          <small style={{ display: 'block', color: '#888' }}>
            <MailOutlined style={{ marginRight: 4 }} />
            juanflores@gmail.com
          </small>

          <small>
            <BankOutlined style={{ marginRight: 4 }} />
            Sucursal Granada
          </small>
        </span>
      ),
    },
    {
      key: '3',
      label: (
        <a onClick={logout} style={{ color: 'red' }}>
          <LogoutOutlined style={{ marginRight: 4 }} />
          Salir
        </a>
      ),
    },
  ];

  return (
    <Layout className="h-screen">
      <Sider collapsible trigger={null} collapsed={collapsed}>
        <div className="h-16 flex items-center justify-center">
          <img src={logo} alt="logo" className="h-10" />
        </div>
        <SidebarMenu />
      </Sider>
      <Layout>
        <Header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              color: '#fff',
            }}
          />

          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <ThemeToggle />

            <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
              <Button
                icon={
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      border: '1px solid #fff',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: '#fff',
                      fontSize: 12,
                    }}
                  >
                    <span style={{ fontSize: 12 }}>JC</span>
                  </div>
                }
                size="large"
                type="text"
                style={{
                  color: '#fff',
                }}
              >
                <DownOutlined style={{ color: '#fff' }} />
              </Button>
            </Dropdown>
          </div>
        </Header>
        <Content className="my-6 mx-6 p-1 overflow-y-auto">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutApp;
