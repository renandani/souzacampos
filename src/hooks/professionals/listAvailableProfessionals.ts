import { ProfessionalsType } from '@/@types/professionals'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'

const fetchAvailableProfessionals = async (): Promise<ProfessionalsType[]> => {
  const { data } = await api.get<ProfessionalsType[]>(
    '/professionals/available',
  )

  return data
}

export const useListAvailableProfessionals = () => {
  return useQuery('list-professionals-available', fetchAvailableProfessionals)
}
