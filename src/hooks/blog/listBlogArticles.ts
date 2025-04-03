/* eslint-disable camelcase */
'use client'

import { useQuery } from 'react-query'
import { api } from '@/lib/axios'
import { ListBlogArticlesType } from '@/@types/blog'

interface ListBlogArticlesOptions {
  page: number
  per_page: number
}

const fetchListBlogArticle = async ({
  page,
  per_page,
}: ListBlogArticlesOptions) => {
  const queryParams = new URLSearchParams()
  queryParams.append('page', String(page))
  queryParams.append('per_page', String(per_page))

  const { data } = await api.get<ListBlogArticlesType>(
    '/blog/articles/available',
    { params: queryParams },
  )

  return data
}

export const useListBlogArticle = ({
  page,
  per_page,
}: ListBlogArticlesOptions) => {
  return useQuery({
    queryKey: ['list-articles', { page, per_page }],
    queryFn: () => fetchListBlogArticle({ page, per_page }),
  })
}
