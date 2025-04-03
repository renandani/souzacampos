'use client'

import { ObligationsStatesType } from '@/@types/infomation/obligations'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'

const fetchListObligationsStates = async (): Promise<
  ObligationsStatesType[]
> => {
  const { data } = await api.get<ObligationsStatesType[]>(
    '/information/obligations/states',
  )

  return data
}

export const useListObligationsStates = () => {
  return useQuery({
    queryKey: ['list-information-obligations-states'],
    queryFn: fetchListObligationsStates,
  })
}
