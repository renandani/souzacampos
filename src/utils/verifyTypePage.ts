import { PagesType } from '@/@types/pages'

export function verifyTypePage(page: PagesType) {
  switch (page.type) {
    case 'page':
      return `/${page.slug}`
    case 'link':
      return page.content
    case 'doc':
      return page.file_url
    default:
      return '/'
  }
}
