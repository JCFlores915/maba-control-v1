import { ConfigProvider, theme as antdTheme } from 'antd';
import { useTheme } from './context/ThemeContext';
import AppRouter from './router';
const AppTheme = () => {
  const { theme } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
      }}
    >
      <AppRouter />
    </ConfigProvider>
  );
};

export default AppTheme;
