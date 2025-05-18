import { useState } from 'react';
import { Form, Input, Button, Steps, Row, Col, Upload, Select } from 'antd';
import ContextBox from '../../../components/ContextBox';
import { useNavigate } from 'react-router-dom';
import { useSweetAlert } from '../../../hooks/useSweetAlert';
import { UploadOutlined } from '@ant-design/icons';
const ClientFilesCreatePage = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

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
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item
                label="Nombres"
                name="names"
                rules={[{ required: true, message: 'Por favor ingresa el nombre' }]}
              >
                <Input placeholder="Nombre" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item
                label="Apellidos"
                name="surnames"
                rules={[{ required: true, message: 'Por favor ingresa el apellido' }]}
              >
                <Input placeholder="Apellido" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item
                label="Municipio"
                name="municipality"
                rules={[{ required: true, message: 'Por favor selecciona el municipio' }]}
              >
                <Select placeholder="Municipio" allowClear>
                  <Select.Option value="1">Municipio 1</Select.Option>
                  <Select.Option value="2">Municipio 2</Select.Option>
                  <Select.Option value="3">Municipio 3</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item
                label="Dirección"
                name="address"
                rules={[{ required: true, message: 'Por favor ingresa la dirección' }]}
              >
                <Input placeholder="Dirección" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item label="Cedula" name="idCard">
                <Input placeholder="Cedula" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item label="Geolocalización" name="geolocation">
                <Input placeholder="Logitud, Latitud (######,-######)" />
              </Form.Item>
            </Col>
            {/* 
              -Correo
              - genero 
              -celular
              -operadora
            */}
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item label="Email" name="email">
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item label="Genero" name="genero">
                <Select placeholder="Genero" allowClear>
                  <Select.Option value="1">Masculino</Select.Option>
                  <Select.Option value="2">Femenino</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            {/* CELULAR */}
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item label="Celular" name="cellphone">
                <Input placeholder="Celular" />
              </Form.Item>
            </Col>
            {/* OPERADORA */}
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item label="Operadora" name="operadora">
                <Select placeholder="Operadora" allowClear>
                  <Select.Option value="1">Claro</Select.Option>
                  <Select.Option value="2">Movistar</Select.Option>
                  <Select.Option value="3">Tigo</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item label="Subir archivo" name="file">
                <Upload
                  accept=".pdf, .doc, .docx"
                  maxCount={1}
                  beforeUpload={() => false}
                  showUploadList={false}
                >
                  <Button icon={<UploadOutlined />} block>
                    Subir archivo
                  </Button>
                </Upload>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item label="Subir archivo" name="file">
                <Upload
                  accept=".pdf, .doc, .docx"
                  maxCount={1}
                  beforeUpload={() => false}
                  showUploadList={false}
                >
                  <Button icon={<UploadOutlined />} block className="border *:border-dashed">
                    Subir archivo
                  </Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
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
