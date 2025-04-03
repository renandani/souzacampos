import { ObligationType } from '@/@types/infomation/obligations'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'

const fetchGetObligationsState = async (
  stateId: number,
): Promise<ObligationType[]> => {
  const { data } = await api.get<ObligationType[]>(
    `/information/obligations/state/${stateId}`,
  )

  return data
}

export const useGetObligationsState = (stateId: number) => {
  return useQuery({
    queryKey: ['get-obligations-state', stateId],
    queryFn: () => fetchGetObligationsState(stateId),
  })
}
