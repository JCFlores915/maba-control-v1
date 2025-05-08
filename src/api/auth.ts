import type { User } from '../types/auth';

export const loginApi = async (email: string, password: string): Promise<User> => {
  // Simulación de llamada API
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@example.com' && password === '123456') {
        resolve({ email, name: 'Admin' });
      } else {
        reject(new Error('Credenciales inválidas'));
      }
    }, 1000);
  });
};
