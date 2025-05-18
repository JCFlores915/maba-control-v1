import { Button } from 'antd';
import ContextBox from '../../../components/ContextBox';
import { TableComponent } from '../../../components/TableComponent';
import { useNavigate } from 'react-router-dom';

const ClientFilesListPage = () => {
  const navigate = useNavigate();
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Apellido',
      dataIndex: 'surname',
      key: 'surname',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Teléfono',
      dataIndex: 'phone',
      key: 'phone',
    },
  ];

  const data = Array.from({ length: 20 }, (_, index) => ({
    key: index,
    name: `Nombre ${index + 1}`,
    surname: `Apellido ${index + 1}`,
    email: `email${index + 1} @example.com`,
    phone: `123456789${index}`,
  }));

  const handleRowClick = () => {
    navigate('/files/client/create');
  };

  return (
    <ContextBox title="Clientes" bgShow={false} className="pb-4">
      <TableComponent
        columns={columns}
        dataSource={data}
        search={true}
        searchPlaceholder="Buscar cliente"
        searchOnChange={(value) => console.log(value)}
        searchOnSearch={(value) => console.log(value)}
        searchOnClear={() => console.log('clear')}
        button={
          <Button type="primary" onClick={handleRowClick} shape="round">
            Nuevo cliente
          </Button>
        }
      />
    </ContextBox>
  );
};

export default ClientFilesListPage;
