import { theme } from "antd";

interface ContextBoxProps {
  children: React.ReactNode;
}

const ContextBox = ({ children }: ContextBoxProps) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div
      style={{
        background: colorBgContainer,
        minHeight: 280,
        padding: 24,
        borderRadius: borderRadiusLG,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
      }}
    >
      {children}
    </div>
  );
};

export default ContextBox;
