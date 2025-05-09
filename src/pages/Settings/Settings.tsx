import { Card } from "antd";
import { useTheme } from "../../context/ThemeContext";
import ContextBox from "../../components/ContextBox";
import ThemeToggle from "../../components/ThemeToggle";

const Settings = () => {
  const { theme } = useTheme();

  return (
    <ContextBox>
      <Card title="Configuración de Tema">
        <p>
          <ThemeToggle />
          <span style={{ marginLeft: 8 }}>
            {theme === "dark" ? "Modo Oscuro" : "Modo Claro"}
          </span>
        </p>
      </Card>
    </ContextBox>
  );
};

export default Settings;
