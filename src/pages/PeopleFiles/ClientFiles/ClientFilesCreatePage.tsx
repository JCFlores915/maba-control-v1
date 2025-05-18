import { useState } from 'react';
import { Form, Button, Steps, Row, Col } from 'antd';
import ContextBox from '../../../components/ContextBox';
import { useNavigate } from 'react-router-dom';
import { useSweetAlert } from '../../../hooks/useSweetAlert';
import {
  formFieldsClient,
  formFieldsBeneficiary1,
  formFieldsBeneficiary2,
} from '../../../utils/formFields';
import FormItemComponent from '../../../components/FormItemComponent';
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
            {formFieldsClient.map((field, index) => (
              <Col xs={24} sm={12} md={8} lg={6} key={index}>
                <FormItemComponent field={field} />
              </Col>
            ))}
          </Row>
        </Form>
      ),
    },
    {
      title: 'Beneficiario 1',
      content: (
        <Form layout="vertical" className="w-full">
          <Row gutter={[16, 16]}>
            {formFieldsBeneficiary1.map((field, index) => (
              <Col xs={24} sm={12} md={8} lg={6} key={index}>
                <FormItemComponent field={field} />
              </Col>
            ))}
          </Row>
        </Form>
      ),
    },
    {
      title: 'Beneficiario 2',
      content: (
        <Form layout="vertical" className="w-full">
          <Row gutter={[16, 16]}>
            {formFieldsBeneficiary2.map((field, index) => (
              <Col xs={24} sm={12} md={8} lg={6} key={index}>
                <FormItemComponent field={field} />
              </Col>
            ))}
          </Row>
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
