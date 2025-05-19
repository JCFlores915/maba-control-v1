import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';

interface PDFUploadProps extends UploadProps {
  placeholder?: string;
}

const PDFUploadComponent: React.FC<PDFUploadProps> = (props) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  return (
    <div>
      <Upload
        {...props}
        beforeUpload={() => false}
        showUploadList={true}
        listType="picture"
        maxCount={1}
        onChange={({ fileList: newFileList }) => {
          setFileList(newFileList);
          if (newFileList.length > 0) {
            const file = newFileList[0];
            if (file.status === 'done') {
              message.success(`${file.name} archivo subido correctamente`);
            } else if (file.status === 'error') {
              message.error(`${file.name} error al subir el archivo`);
            }
          }
        }}
        onRemove={(file) => {
          setFileList((prev) => prev.filter((item) => item.uid !== file.uid));
          message.success(`${file.name} archivo eliminado correctamente`);
        }}
      >
        {fileList.length === 0 && (
          <Button icon={<UploadOutlined />}>{props.placeholder || 'Subir archivo PDF'}</Button>
        )}
      </Upload>
    </div>
  );
};

export default PDFUploadComponent;
