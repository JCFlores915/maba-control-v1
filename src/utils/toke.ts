const TOKEN_KEY = 'auth_token';

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  window.location.href = '/login';
};

export const isTokenValid = (token: string | null) => {
  // Aquí puedes implementar la lógica para validar el token
  // Por ejemplo, decodificar el token y verificar su fecha de expiración
  // de momento solo validar que exista
  return !!token;
};
