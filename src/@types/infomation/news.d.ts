export interface DataNews {
  id: number
  title: string
  content: string
  description: string
  image: string
  keywords: string
  created_at: string
}

export interface NewsType {
  data: DataNews[]
  page: number
  per_page: number
  last_page: number
}
