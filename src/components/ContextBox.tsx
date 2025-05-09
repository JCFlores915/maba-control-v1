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
      }}
    >
      {children}
    </div>
  );
};

export default ContextBox;