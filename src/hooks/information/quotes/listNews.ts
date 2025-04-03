'use client'

import { QuotesType } from '@/@types/infomation/quotes'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'

const fetchListQuotes = async (): Promise<QuotesType[]> => {
  const { data } = await api.get<QuotesType[]>('/information/quotes')

  return data
}

export const useListQuotes = () => {
  return useQuery({
    queryKey: ['list-information-quotes'],
    queryFn: () => fetchListQuotes(),
  })
}
