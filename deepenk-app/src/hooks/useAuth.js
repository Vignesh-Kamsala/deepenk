import { useAuthStore } from '../store/authStore'

export const useAuth = () => {
  const { isAuthenticated, user, setUser, logout, openLoginModal, closeLoginModal } = useAuthStore()
  
  const login = async (credentials) => {
    // TODO: Implement actual authentication logic
    console.log('Login with:', credentials)
  }
  
  const socialLogin = async (provider) => {
    // TODO: Implement social auth (Google, Apple, Microsoft, Phone)
    console.log('Social login with:', provider)
  }
  
  return {
    isAuthenticated,
    user,
    login,
    socialLogin,
    logout,
    openLoginModal,
    closeLoginModal,
  }
}
