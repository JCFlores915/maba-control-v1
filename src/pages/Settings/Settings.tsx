import { Switch, Card } from 'antd';
import { useTheme } from '../../context/ThemeContext';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Card title="Configuración de Tema">
      <p>
        <Switch
          checked={theme === 'dark'}
          onChange={toggleTheme}
          checkedChildren="Oscuro"
          unCheckedChildren="Claro"
        />
        <span style={{ marginLeft: 8 }}>{theme === 'dark' ? 'Modo Oscuro' : 'Modo Claro'}</span>
      </p>
    </Card>
  );
};

export default Settings;