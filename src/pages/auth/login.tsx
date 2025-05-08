import { useState } from 'react';
import { Button, Input, Card, message } from 'antd';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await login(email, password);
      navigate('/');
    } catch (err) {
      message.error('Credenciales incorrectas');
        console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card title="Iniciar Sesión" style={{ maxWidth: 400, margin: 'auto' }}>
      <Input
        placeholder="Correo electrónico"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ marginBottom: 12 }}
      />
      <Input.Password
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ marginBottom: 12 }}
      />
      <Button type="primary" block loading={loading} onClick={handleSubmit}>
        Entrar
      </Button>
    </Card>
  );
};

export default Login;
