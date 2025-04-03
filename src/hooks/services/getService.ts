import { ServicesType } from '@/@types/services'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'

export const fetchGetService = async (
  serviceId: string,
): Promise<ServicesType> => {
  const { data } = await api.get<ServicesType>(`/services/${serviceId}`)

  return data
}

export const useGetService = (serviceId: string) => {
  return useQuery(['get-service', serviceId], () => fetchGetService(serviceId))
}
