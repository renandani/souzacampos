type SocialLinksType = {
  id: string
  type:
    | 'facebook'
    | 'instagram'
    | 'github'
    | 'linkedin'
    | 'pinterest'
    | 'tiktok'
    | 'twitter'
    | 'whatsapp'
  link: string
  professional_id: string
}

export type ProfessionalsType = {
  id: string
  first_name: string
  last_name: string
  department: string
  image: string
  image_url: string
  resume: string
  available: boolean
  socialLinks: SocialLinksType[]
}
