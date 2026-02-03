import { create } from 'zustand'

export const useSearchStore = create((set) => ({
  searchId: null,
  status: null,
  data: null,
  setSearch: (searchId, status, data = null) => set({ searchId, status, data }),
  clearSearch: () => set({ searchId: null, status: null, data: null }),
}))
