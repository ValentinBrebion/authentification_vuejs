import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:1337/api'
    
  })

  axios.interceptors.request.use(function (config) {
    config.headers = {
      ...config.headers,
      Authorization: !!`Bearer ${localStorage.getItem('AUTH_TOKEN')}`
    }
    return config;
	}, function (error) {
    return Promise.reject(error);
	});


  export default instance