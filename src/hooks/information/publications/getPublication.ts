import { PublicationsType } from '@/@types/infomation/publications'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'

const fetchGetPublication = async (
  publicationId: string,
): Promise<PublicationsType> => {
  const { data } = await api.get<PublicationsType>(
    `/information/publications/${publicationId}`,
  )

  return data
}

export const useGetPublication = (publicationId: string) => {
  return useQuery({
    queryKey: ['get-publication', publicationId],
    queryFn: () => fetchGetPublication(publicationId),
  })
}
