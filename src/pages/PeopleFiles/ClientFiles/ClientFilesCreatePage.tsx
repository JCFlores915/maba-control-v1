import { useState } from 'react';
import { Form, Input, Button, Steps, Space } from 'antd';
import ContextBox from '../../../components/ContextBox';
import { useNavigate } from 'react-router-dom';
import { useSweetAlert } from '../../../hooks/useSweetAlert';

const ClientFilesCreatePage = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const handleFinish = (values: any) => {
    console.log('Form values:', values);
  };
  const handleFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleCancel = () => {
    navigate('/files/client');
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: 'Clientes',
      content: (
        <Form layout="vertical" className="w-full">
          <Form.Item
            label="Nombre"
            name="name"
            rules={[{ required: true, message: 'Por favor ingresa el nombre' }]}
          >
            <Input placeholder="Nombre" />
          </Form.Item>
          <Form.Item
            label="Apellido"
            name="surname"
            rules={[{ required: true, message: 'Por favor ingresa el apellido' }]}
          >
            <Input placeholder="Apellido" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Por favor ingresa el email' }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Teléfono" name="phone">
            <Input placeholder="Teléfono" />
          </Form.Item>
          <Form.Item label="Dirección" name="address">
            <Input placeholder="Dirección" />
          </Form.Item>
          <Form.Item label="Notas" name="notes">
            <Input.TextArea placeholder="Notas" />
          </Form.Item>
        </Form>
      ),
    },
    {
      title: 'Beneficiario 1',
      content: (
        <Form layout="vertical" className="w-full">
          <Form.Item
            label="Nombre"
            name="name"
            rules={[{ required: true, message: 'Por favor ingresa el nombre' }]}
          >
            <Input placeholder="Nombre" />
          </Form.Item>
          <Form.Item
            label="Apellido"
            name="surname"
            rules={[{ required: true, message: 'Por favor ingresa el apellido' }]}
          >
            <Input placeholder="Apellido" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Por favor ingresa el email' }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Teléfono" name="phone">
            <Input placeholder="Teléfono" />
          </Form.Item>
          <Form.Item label="Dirección" name="address">
            <Input placeholder="Dirección" />
          </Form.Item>
          <Form.Item label="Notas" name="notes">
            <Input.TextArea placeholder="Notas" />
          </Form.Item>
        </Form>
      ),
    },
    {
      title: 'Beneficiario 2',
      content: (
        <Form layout="vertical" className="w-full">
          <Form.Item
            label="Nombre"
            name="name"
            rules={[{ required: true, message: 'Por favor ingresa el nombre' }]}
          >
            <Input placeholder="Nombre" />
          </Form.Item>
          <Form.Item
            label="Apellido"
            name="surname"
            rules={[{ required: true, message: 'Por favor ingresa el apellido' }]}
          >
            <Input placeholder="Apellido" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Por favor ingresa el email' }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Teléfono" name="phone">
            <Input placeholder="Teléfono" />
          </Form.Item>
          <Form.Item label="Dirección" name="address">
            <Input placeholder="Dirección" />
          </Form.Item>
          <Form.Item label="Notas" name="notes">
            <Input.TextArea placeholder="Notas" />
          </Form.Item>
        </Form>
      ),
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const { showAlert } = useSweetAlert();
  return (
    <ContextBox title="Nuevo cliente" className="p-6">
      <Steps current={current} items={items} />
      <div className="mt-6">{steps[current].content}</div>
      {/* quiero que sea justify-between pero en movil quiero que sea un bton debado de otro */}
      <div className="mt-6 flex flex-col-reverse gap-4 sm:flex-row sm:justify-between sm:items-center">
        {current < steps.length - 1 && (
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <Button type="primary" onClick={() => next()} variant="solid" shape="round">
              Siguiente
            </Button>
            <Button type="default" onClick={() => handleCancel()} variant="outlined" shape="round">
              Cancelar
            </Button>
          </div>
        )}

        {current === steps.length - 1 && (
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <Button
              type="primary"
              onClick={() =>
                showAlert({
                  title: '¡Éxito!',
                  text: 'Cliente creado con éxito',
                  icon: 'success',
                })
              }
              variant="solid"
              shape="round"
            >
              Guardar
            </Button>
            <Button type="default" onClick={() => handleCancel()} variant="outlined" shape="round">
              Cancelar
            </Button>
          </div>
        )}
        {current > 0 && (
          <Button type="default" onClick={() => prev()} variant="outlined" shape="round">
            Anterior
          </Button>
        )}
      </div>
    </ContextBox>
  );
};

export default ClientFilesCreatePage;
