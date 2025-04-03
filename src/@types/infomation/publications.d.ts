export interface ChildrenPublication {
  id: number
  title: string
  parent_id: number
  content: string
  available: number
  description: string
  created_at: string
  updated_at: string
}

export interface PublicationsType {
  id: number
  title: string
  parent_id: number
  content: string
  available: number
  description: string
  created_at: string
  updated_at: string
  children: ChildrenPublication[]
}
