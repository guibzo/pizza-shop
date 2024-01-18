import { api } from '@/libs/axios'

type UpdateProfileBody = {
  name: string
  description: string | null
}

export const updateProfile = async ({
  name,
  description,
}: UpdateProfileBody) => {
  await api.put('/profile', {
    name,
    description,
  })
}
