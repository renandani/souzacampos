import { ObligationType } from '@/@types/infomation/obligations'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'

const fetchGetObligation = async (
  obligationId: number,
): Promise<ObligationType> => {
  const { data } = await api.get<ObligationType>(
    `/information/obligations/${obligationId}`,
  )

  return data
}

export const useGetObligation = (obligationId: number) => {
  return useQuery({
    queryKey: ['get-obligation', obligationId],
    queryFn: () => fetchGetObligation(obligationId),
  })
}
