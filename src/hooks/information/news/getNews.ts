import { DataNews } from '@/@types/infomation/news'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'

const fetchGetNews = async (newsId: string): Promise<DataNews> => {
  const { data } = await api.get<DataNews>(`/information/news/${newsId}`)

  return data
}

export const useGetNews = (newsId: string) => {
  return useQuery({
    queryKey: ['get-news', newsId],
    queryFn: () => fetchGetNews(newsId),
  })
}
