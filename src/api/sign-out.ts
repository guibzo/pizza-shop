import { api } from '@/libs/axios'

export const signOut = async () => {
  await api.post('/sign-out')
}
