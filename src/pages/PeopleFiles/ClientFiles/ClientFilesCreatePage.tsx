import { useState } from 'react';
import { Button, Steps, Row, Col, Form } from 'antd';
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
  const [formClient] = Form.useForm();
  const [formBeneficiary1] = Form.useForm();
  const [formBeneficiary2] = Form.useForm();

  const handleCancel = () => {
    navigate('/files/client');
  };

  const next = () => {
    const currentForm = [formClient, formBeneficiary1, formBeneficiary2][current];
    currentForm
      .validateFields()
      .then(() => {
        setCurrent(current + 1);
      })
      .catch((errorInfo) => {
        console.log('Validation Failed:', errorInfo);
      });
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  // llenar los formularios con datos de ejemplo
  const fillForm = (form, fields) => {
    const values = {};
    fields.forEach((field) => {
      if (field.type === 'input') {
        values[field.name] = 'Ejemplo';
      } else if (field.type === 'select') {
        values[field.name] = field.options[0].value;
      }
    });
    values['file'] = null; // Para el campo de carga de archivos
    values['email'] = 'email@gmail.com'; // Para el campo de email
    values['geolocation'] = '-12.345678,34.567890'; // Para el campo de geolocalización
    form.setFieldsValue(values);
  };

  // Llenar los formularios con datos de ejemplo al cargar la página
  useState(() => {
    fillForm(formClient, formFieldsClient);
    fillForm(formBeneficiary1, formFieldsBeneficiary1);
    fillForm(formBeneficiary2, formFieldsBeneficiary2);
  }, []);

  const steps = [
    {
      title: 'Clientes',
      content: (
        <Form layout="vertical" className="w-full" form={formClient}>
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
        <Form layout="vertical" className="w-full" form={formBeneficiary1}>
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
        <Form layout="vertical" className="w-full" form={formBeneficiary2}>
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
