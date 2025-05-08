import { theme } from "antd";

const Dashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div
      style={{
        background: colorBgContainer,
        minHeight: 280,
        padding: 24,
        borderRadius: borderRadiusLG,
      }}
    >
      {" "}
      <h2>Bienvenido al panel principal</h2>
      <p>Esta es una simulación de un panel de administración.</p>
      <p>
        Utiliza el menú lateral para navegar entre las diferentes secciones.
      </p>
      <p>¡Disfruta!</p>
    </div>
  );
};

export default Dashboard;
