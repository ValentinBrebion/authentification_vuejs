import axios from '../config/axios'
const login = (identifier, password) => {return axios.post('/auth/local', {identifier, password})}

const isAuthenticated = () => {
    return !!localStorage.getItem('AUTH_TOKEN');
  };
  const disconnect = () => {
    localStorage.clear();
  };
export default { login, isAuthenticated, disconnect }