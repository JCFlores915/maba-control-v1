// import { theme } from 'antd';

interface ContextBoxProps {
  children: React.ReactNode;
  title?: string;
}

const ContextBox = ({ children, title }: ContextBoxProps) => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  return (
    <div
      className="min-h-[280px] p-6 rounded-lg flex flex-col h-full"
      style={
        {
          // background: colorBgContainer,
        }
      }
    >
      {title && (
        <div className="mb-4 border-b border-b-gray-300 pb-4">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
        </div>
      )}
      {children}
    </div>
  );
};

export default ContextBox;
