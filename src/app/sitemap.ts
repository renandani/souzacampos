import { ListBlogArticlesType } from '@/@types/blog'
import { PagesType } from '@/@types/pages'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // INIT - GET PAGES
    const responsePages = await fetch(
      'https://sgc.tbrweb.com.br/pages/available',
      {
        method: 'get',
        headers: {
          'x-sgc-header': `${process.env.NEXT_PUBLIC_SGC_KEY}`,
          'x-ssr-enabled': `${process.env.NEXT_IS_SSR_ENABLED}`,
          [String(process.env.NEXT_SSR_HEADER)]: `${process.env.NEXT_SSR_ORIGIN}`,
        },
        next: { revalidate: 60 * 60 * 24 },
      },
    )

    const dataPages: PagesType[] = (await responsePages.json()) || []

    if (!Array.isArray(dataPages)) {
      console.error('dataPages não é um array:', dataPages)
      return []
    }

    const pageEntries: MetadataRoute.Sitemap = dataPages.flatMap((item) => {
      if (Array.isArray(item.children) && item.children.length > 0) {
        return item.children.map((child) => ({
          url: `${process.env.NEXT_PUBLIC_BASE_URL}${child.slug}`,
          lastModified: child.updated_at || new Date().toISOString(),
        }))
      }

      return {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${item.slug}`,
        lastModified: item.updated_at || new Date().toISOString(),
      }
    })

    // INIT - GET ARTICLES
    const responseArticles = await fetch(
      'https://sgc.tbrweb.com.br/blog/articles/available',
      {
        method: 'get',
        headers: {
          'x-sgc-header': `${process.env.NEXT_PUBLIC_SGC_KEY}`,
          'x-ssr-enabled': `${process.env.NEXT_IS_SSR_ENABLED}`,
          [String(process.env.NEXT_SSR_HEADER)]: `${process.env.NEXT_SSR_ORIGIN}`,
        },
        next: { revalidate: 60 * 60 * 24 },
      },
    )

    const dataArticles: ListBlogArticlesType = (await responseArticles.json()) || { data: [] }

    if (!Array.isArray(dataArticles.data)) {
      console.error('dataArticles.data não é um array:', dataArticles.data)
      return []
    }

    const articlesEntries: MetadataRoute.Sitemap = dataArticles.data.map((item) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}blog/${item.slug}`,
      lastModified: item.created_at || new Date().toISOString(),
    }))

    return [...pageEntries, ...articlesEntries]
  } catch (error) {
    console.error('Erro ao gerar sitemap:', error)
    return []
  }
}
