import { SeoType } from '@/@types/seo'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'

const fetchSeo = async (): Promise<SeoType> => {
  const { data } = await api.get<SeoType>('/seo')

  return data
}

export const useGetSeo = () => {
  return useQuery('get-seo', fetchSeo)
}
