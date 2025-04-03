export type PagesType = {
  id: string
  target: string
  title: string
  type: 'page' | 'link' | 'doc'
  file: string
  file_url: string
  slug: string
  content: string
  children: PagesType[]
  updated_at: string
}
