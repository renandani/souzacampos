import { LgpdType } from '@/@types/lgpd'
import { api } from '@/lib/axios'

import { useMutation } from 'react-query'

const fetchCreateLgpd = async (params: LgpdType) => {
  await api.post('/lgpds', {
    fingerprint: params.fingerprint,
    name: params.name,
    email: params.email,
    accept: params.accept,
  })
}

export const useCreateLgpd = () => {
  return useMutation(fetchCreateLgpd)
}
