import axios from '../config/axios'
const login = (identifier, password) => {return axios.post('/auth/local', {identifier, password})}

export default { login }