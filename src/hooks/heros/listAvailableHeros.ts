import { HerosType } from '@/@types/heros'
import { api } from '@/lib/axios'

import { useQuery } from 'react-query'

const fetchAvailableHeros = async (): Promise<HerosType[]> => {
  const { data } = await api.get<HerosType[]>('/heros/available')

  return data
}

export const useListAvailableHeros = () => {
  return useQuery('list-heros-available', fetchAvailableHeros)
}
