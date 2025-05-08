import { Layout, Menu, Button } from "antd";
import {
  SettingOutlined,
  DashboardOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/logo.png"; // Adjust the path as necessary

const { Header, Content, Sider } = Layout;

const LayoutApp = () => {
  const { logout } = useAuth();
  const { toggleTheme, theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const selectedKey = location.pathname === "/settings" ? "2" : "1";

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div
          className="logo"
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={logo} alt="logo" style={{ height: 40 }} />
        </div>
        <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]}>
          <Menu.Item
            key="1"
            icon={<DashboardOutlined />}
            onClick={() => navigate("/")}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<SettingOutlined />}
            onClick={() => navigate("/settings")}
          >
            Configuración
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 12,
          }}
        >
          <Button onClick={toggleTheme}>
            Modo {theme === "light" ? "Oscuro" : "Claro"}
          </Button>
          <Button danger icon={<LogoutOutlined />} onClick={logout}>
            Salir
          </Button>
        </Header>
        <Content
          style={{ margin: "24px 16px", padding: 24 }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutApp;
