import { useState } from "react";
import { Button, Input, Card, message, Layout } from "antd";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import ContextBox from "../../components/ContextBox";
import logo from "../../assets/logo.png"; // Adjust the path as necessary
const { Content } = Layout;
const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      message.error("Credenciales incorrectas");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom,rgba(0, 133, 227, 0.8), rgba(83, 28, 106, 0.8)), url('https://source.unsplash.com/random/1920x1080/?nature')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        <ContextBox>
          <img
            src={logo}
            alt="logo"
            style={{
              display: "block",
              margin: "10px auto 20px auto",
              maxWidth: "100%",
              height: 100,
              width: 100,
              objectFit: "contain",
              borderRadius: "5%",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          />
          <Card
            title="INICIAR SESIÓN"
            style={{ maxWidth: 400, margin: "auto", textAlign: "center" }}
          >
            <Input
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: 12 }}
              size="large"
            />
            <Input.Password
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: 12 }}
              size="large"
            />
            <Button
              type="primary"
              block
              loading={loading}
              onClick={handleSubmit}
              size="large"
            >
              Entrar
            </Button>
          </Card>
          <Content style={{ textAlign: "center", marginTop: 24 }}>
            <p>© 2023 Tu Empresa. Todos los derechos reservados.</p>
            <p>Versión 1.0.0</p>
          </Content>
        </ContextBox>
      </Content>
    </Layout>
  );
};

export default Login;
