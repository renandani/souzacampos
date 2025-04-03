/* eslint-disable camelcase */
'use client'

import { useQuery } from 'react-query'
import { api } from '@/lib/axios'
import { ListBlogArticlesType } from '@/@types/blog'

interface ListBlogArticleByCategoryOptions {
  page: number
  per_page: number
  slug: string
}

const fetchListBlogArticleByCategory = async ({
  page,
  per_page,
  slug,
}: ListBlogArticleByCategoryOptions) => {
  const queryParams = new URLSearchParams()
  queryParams.append('page', String(page))
  queryParams.append('per_page', String(per_page))

  const { data } = await api.get<ListBlogArticlesType>(
    `/blog/articles/category/${slug}`,
    { params: queryParams },
  )

  return data
}

export const useListBlogArticleByCategory = ({
  page,
  per_page,
  slug,
}: ListBlogArticleByCategoryOptions) => {
  return useQuery({
    queryKey: ['list-articles-category', { page, per_page, slug }],
    queryFn: () => fetchListBlogArticleByCategory({ page, per_page, slug }),
    enabled: !!slug,
  })
}
