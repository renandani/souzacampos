import { PagesType } from '@/@types/pages'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'

export const fetchGetPage = async (pageId: string): Promise<PagesType> => {
  const { data } = await api.get<PagesType>(`/pages/${pageId}`)

  return data
}

export const useGetPage = (pageId: string) => {
  return useQuery(['get-page', pageId], () => fetchGetPage(pageId))
}
