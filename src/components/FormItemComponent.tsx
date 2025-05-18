import { Form, Input, Select, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { type Rule } from 'antd/es/form';
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
        return (
          <Upload accept={accept} maxCount={1} beforeUpload={() => false} showUploadList={false}>
            <Button icon={<UploadOutlined />} block>
              {placeholder || 'Subir archivo'}
            </Button>
          </Upload>
        );
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
