'use client'

import { NewsType } from '@/@types/infomation/news'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'

export type NewsQueryParams = {
  page?: number
  perPage?: number
}

const fetchListNews = async ({
  page,
  perPage,
}: NewsQueryParams): Promise<NewsType> => {
  if (page !== undefined && perPage !== undefined) {
    const { data } = await api.get<NewsType>(
      `/information/news?page=${page}&per_page=${perPage}`,
    )

    return data
  }

  const { data } = await api.get<NewsType>('/information/news')

  return data
}

export const useListNews = (params: NewsQueryParams) => {
  return useQuery({
    queryKey: ['list-information-news'],
    queryFn: () => fetchListNews(params),
  })
}
