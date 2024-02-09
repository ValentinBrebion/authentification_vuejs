import { ref } from 'vue'
import apiService from '@/services/api.service'

export default function useAuth(){
      const loginForm = ref({
        username: '',
        password: ''
      })
  
      async function login() {
        try {
          const response = await apiService.login(loginForm.value.username, loginForm.value.password)
          // Traitement de la réponse de l'API ici
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