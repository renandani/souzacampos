import { ServicesType } from '@/@types/services'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'

const fetchAvailableServices = async (): Promise<ServicesType[]> => {
  const { data } = await api.get<ServicesType[]>('/services/available')

  return data
}

export const useListAvailableServices = () => {
  return useQuery('list-services-available', fetchAvailableServices)
}
