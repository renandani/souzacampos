'use client'

import { SchedulesType } from '@/@types/infomation/schedules'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'

const fetchListSchedules = async (): Promise<SchedulesType[]> => {
  const { data } = await api.get<SchedulesType[]>('/information/schedules')

  return data
}

export const useListSchedules = () => {
  return useQuery({
    queryKey: ['list-information-schedules'],
    queryFn: () => fetchListSchedules(),
  })
}
