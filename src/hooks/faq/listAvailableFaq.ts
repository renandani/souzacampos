import { FaqType } from '@/@types/faq'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'

const fetchAvailableFaq = async (): Promise<FaqType[]> => {
  const { data } = await api.get<FaqType[]>('/faq/available')

  return data
}

export const useListAvailableFaq = () => {
  return useQuery('list-faq-available', fetchAvailableFaq)
}
