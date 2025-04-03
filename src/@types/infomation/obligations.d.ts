export interface ObligationsStatesType {
  id: number
  title: string
}

export interface ObligationsStateType {
  id: number
  title: string
  parent_id: number
  content: string
  description: string
  created_at: string
  updated_at: string
}

export interface ObligationType {
  id: number
  title: string
  parent_id: number
  content: string
  description: string
  created_at: string
  updated_at: string
}
