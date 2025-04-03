import { SettingsType } from '@/@types/settings'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'

const fetchGetSettings = async (): Promise<SettingsType> => {
  const { data } = await api.get<SettingsType>(`/settings`)

  return data
}

export const useGetSettings = () => {
  return useQuery({
    queryKey: ['get-settings'],
    queryFn: fetchGetSettings,
  })
}
