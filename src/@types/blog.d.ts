export type BlogAuthorType = {
  id: string
  name: string
  image_url: string
}

export type BlogCategoryType = {
  id: string
  title: string
  slug: string
}

export type BlogArticleType = {
  id: string
  abstract: string
  author: BlogAuthorType
  content: string
  title: string
  categories: BlogCategoryType[]
  slug: string
  created_at: Date
  image_url: string
}

export type ListBlogArticlesType = {
  data: BlogArticleType[]
  page: number
  per_page: number
  last_page: number
}
