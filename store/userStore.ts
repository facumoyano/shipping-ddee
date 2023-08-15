import { create } from 'zustand'

type Store = {
  accessToken: ''
  setAccessToken: (accessToken: any) => void
}

const userStore = create<Store>()((set) => ({
  accessToken: '',
  setAccessToken: (accessToken: any) => set({ accessToken }),
}))

export default userStore