import { create } from 'zustand'

const TOKEN_KEY = 'deepenk_token'
const USER_KEY = 'deepenk_user'

function loadStored() {
  try {
    const token = localStorage.getItem(TOKEN_KEY)
    const userJson = localStorage.getItem(USER_KEY)
    if (token && userJson) {
      const user = JSON.parse(userJson)
      return { user, isAuthenticated: true }
    }
  } catch (_) {}
  return { user: null, isAuthenticated: false }
}

export const useAuthStore = create((set) => ({
  ...loadStored(),
  isLoginModalOpen: false,

  setAuth: (user, token) => {
    if (token) localStorage.setItem(TOKEN_KEY, token)
    if (user) localStorage.setItem(USER_KEY, JSON.stringify(user))
    set({ user, isAuthenticated: !!user })
  },
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  logout: () => {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
    set({ user: null, isAuthenticated: false })
  },
  openLoginModal: () => set({ isLoginModalOpen: true }),
  closeLoginModal: () => set({ isLoginModalOpen: false }),
}))
