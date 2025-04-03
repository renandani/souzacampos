/* eslint-disable camelcase */
'use client'

import { useQuery } from 'react-query'
import { api } from '@/lib/axios'
import { BlogCategoryType } from '@/@types/blog'

const fetchListBlogCategories = async () => {
  const { data } = await api.get<BlogCategoryType[]>(
    '/blog/categories/available',
  )
  return data
}

export const useListBlogCategories = () => {
  return useQuery({
    queryKey: 'list-categories',
    queryFn: () => fetchListBlogCategories(),
  })
}
