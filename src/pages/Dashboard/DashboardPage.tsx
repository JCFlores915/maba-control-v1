import { Card } from "antd";
import ContextBox from "../../components/ContextBox";

const DashboardPage = () => {
  return (
    <ContextBox>
      {" "}
      <h2>Bienvenido al panel principal</h2>
      <p>Esta es una simulación de un panel de administración.</p>
      <p>
        Utiliza el menú lateral para navegar entre las diferentes secciones.
      </p>
      <p>¡Disfruta!</p>
      <Card title={<h2>Bienvenido al panel principal</h2>}>
        <p>Esta es una simulación de un panel de administración.</p>
        <p>
          Utiliza el menú lateral para navegar entre las diferentes secciones.
        </p>
        <p>¡Disfruta!</p>
      </Card>
    </ContextBox>
  );
};

export default DashboardPage;
