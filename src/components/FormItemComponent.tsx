import { Form, Input, Select } from 'antd';
import { type Rule } from 'antd/es/form';
import PDFUploadComponent from './PDFUploadComponent';
const { Option } = Select;

export type FieldType = 'input' | 'select' | 'upload';

interface OptionType {
  label: string;
  value: string | number;
}

export interface DynamicFormItemProps {
  field: {
    label: string;
    name: string;
    type: FieldType;
    placeholder?: string;
    rules?: Rule[];
    options?: OptionType[];
    accept?: string;
  };
}

const FormItemComponent: React.FC<DynamicFormItemProps> = ({ field }) => {
  const { label, name, type, placeholder, rules, options, accept } = field;

  const renderField = () => {
    switch (type) {
      case 'input':
        return <Input placeholder={placeholder} />;
      case 'select':
        return (
          <Select placeholder={placeholder} allowClear>
            {options?.map((opt) => (
              <Option key={opt.value} value={opt.value}>
                {opt.label}
              </Option>
            ))}
          </Select>
        );
      case 'upload':
        return <PDFUploadComponent accept={accept} placeholder={placeholder} name={name} />;
      default:
        return null;
    }
  };

  return (
    <Form.Item label={label} name={name} rules={rules}>
      {renderField()}
    </Form.Item>
  );
};

export default FormItemComponent;
