'use client'

import { PublicationsType } from '@/@types/infomation/publications'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'

const fetchListPublications = async (): Promise<PublicationsType[]> => {
  const { data } = await api.get<PublicationsType[]>(
    '/information/publications',
  )

  return data
}

export const useListPublications = () => {
  return useQuery({
    queryKey: ['list-information-publications'],
    queryFn: fetchListPublications,
  })
}
