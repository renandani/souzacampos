import { PagesType } from '@/@types/pages'
import { api } from '@/lib/axios'

import { useQuery } from 'react-query'

const fetchAvailablePages = async (): Promise<PagesType[]> => {
  const { data } = await api.get<PagesType[]>('/pages/available')

  return data
}

export const useListAvailablePages = () => {
  return useQuery('list-pages-available', fetchAvailablePages)
}
