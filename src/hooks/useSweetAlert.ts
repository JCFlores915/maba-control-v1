// useSweetAlertTheme.ts
import Swal, { type SweetAlertOptions } from 'sweetalert2';
import { useTheme } from '../context/ThemeContext';

export const useSweetAlert = () => {
  const { theme } = useTheme();

  const showAlert = (options: SweetAlertOptions) => {
    return Swal.fire({
      ...options,
      theme,
    });
  };

  return { showAlert };
};
