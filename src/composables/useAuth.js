import { ref } from 'vue'
import { useRouter } from 'vue-router'
import apiService from '@/services/api.service'

export default function useAuth(){
  const router = useRouter(); // Initialize the router
      const loginForm = ref({
        username: '',
        password: ''
      })
  
      async function login() {
        try {
          const response = await apiService.login(loginForm.value.username, loginForm.value.password)
          localStorage.setItem('AUTH_TOKEN', response.data.jwt)
          localStorage.setItem('user', JSON.stringify(response.data.user))

          router.push({ name: 'home' })
          console.log(response)
        } catch(error) {
          console.error('Erreur lors de la connexion:', error)
        }
      }
  
      return {
        login,
        loginForm
      }
  }