import { BlogArticleType } from '@/@types/blog'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'

export const fetchGetBlogArticle = async (
  slug: string,
): Promise<BlogArticleType> => {
  const { data } = await api.get<BlogArticleType>(`/blog/articles/${slug}`)
  return data
}

export const useGetBlogArticle = (slug: string) => {
  return useQuery(['get-blog-article', slug], () => fetchGetBlogArticle(slug))
}
