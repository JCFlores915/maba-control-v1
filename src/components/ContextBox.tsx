import { theme } from 'antd';

interface ContextBoxProps {
  children?: React.ReactNode;
  title?: string;
  className?: string;
  bgShow?: boolean;
}

const ContextBox = ({ children, title, className, bgShow = true }: ContextBoxProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="min-h-[280px] p-6 rounded-lg flex flex-col h-full">
      {title && (
        <div className="mb-6 border-b border-gray-500/30 pb-4">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
        </div>
      )}
      <div
        className={`rounded-lg flex flex-col *:h-full  ${className}`}
        style={{
          background: bgShow ? colorBgContainer : 'transparent',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ContextBox;
