'use client'

import { useListBlogArticle } from '@/hooks/blog/listBlogArticles'
import Image from 'next/image'
import Link from 'next/link'
import { notFound, useSearchParams } from 'next/navigation'
import { format } from 'date-fns'
import { useListBlogCategories } from '@/hooks/blog/listBlogCategories'
import { useListBlogArticleByCategory } from '@/hooks/blog/listBlogArticlesByCategory'
import { useEffect, useState } from 'react'
import { ptBR } from 'date-fns/locale'

export function BlogContent() {
  const [show, setShow] = useState(false)
  const searchParams = useSearchParams()

  const categorieSlug = searchParams.get('categoria')

  const { data, isLoading, isError } = useListBlogArticle({
    page: 1,
    per_page: 10,
  })

  const {
    data: dataListBlogArticleByCategory,
    isLoading: isLoadingListBlogArticleByCategory,
    isError: isErrorListBlogArticleByCategory,
  } = useListBlogArticleByCategory({
    slug: categorieSlug as string,
    page: 1,
    per_page: 10,
  })

  const {
    data: dataCategories,
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
  } = useListBlogCategories()

  function showNewsByCategory() {
    setShow(false)
  }

  useEffect(() => {
    if (categorieSlug !== null) {
      setShow(true)
    }
  }, [categorieSlug])

  if (isError) {
    return notFound()
  }

  return (
    <>
      <section className="bg-[url('../assets/images/bg-internal-page.png')] bg-center bg-no-repeat bg-cover py-10 relative text-gray-800">
        <div className="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
          <div className="w-full flex justify-end items-center py-16 z-10">
            <div>
              <h2 className="text-4xl sm:text-6xl font-bold">Blog</h2>
              <div className="flex gap-3">
                <Link href="/">Home</Link>

                <span>/</span>

                <span>Blog</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto py-12 grid grid-cols-1 sm:grid-cols-3 px-4 bg-body gap-16">
        <section className="col-span-1 sm:col-span-2 grid grid-cols-2 gap-8">
          <>
            {show ? (
              <>
                {isLoadingListBlogArticleByCategory ? (
                  <p>Carregando...</p>
                ) : isErrorListBlogArticleByCategory ? (
                  <p>Erro...</p>
                ) : dataListBlogArticleByCategory ? (
                  <>
                    {dataListBlogArticleByCategory.data.length === 0 && (
                      <span className="font-semibold bg-primary-500 px-4 py-2 text-xs space tracking-widest uppercase hover:bg-primary-500 text-center mt-5 h-fit w-full col-span-2 hover:text-body line-clamp-2 hover:cursor-pointer">
                        Ops... Nenhum notícia foi encontrada.
                      </span>
                    )}
                    {dataListBlogArticleByCategory.data.map((item) => {
                      return (
                        <article
                          key={item.id}
                          className="col-span-2 sm:col-span-1"
                        >
                          <Image
                            src={item.image_url}
                            alt={''}
                            width={495}
                            height={300}
                            className="w-full mb-9 max-w-[495px] max-h-[300px]"
                          />

                          <span className="uppercase font-semibold text-sm text-primary-500-500">
                            {format(new Date(item.created_at), 'MMM dd. yy', {
                              locale: ptBR,
                            })}
                          </span>

                          <h4 className="font-semibold text-2xl">
                            <Link href={`/blog/${item.slug}`}>
                              {item.title}
                            </Link>
                          </h4>
                        </article>
                      )
                    })}
                  </>
                ) : (
                  <p>Undefined</p>
                )}
              </>
            ) : (
              <>
                {isLoading ? (
                  <p>Carregando...</p>
                ) : isError ? (
                  <p>Erro...</p>
                ) : data ? (
                  <>
                    {data.data.map((item) => {
                      return (
                        <article
                          key={item.id}
                          className="col-span-2 sm:col-span-1"
                        >
                          <Image
                            src={item.image_url}
                            alt={''}
                            width={495}
                            height={300}
                            className="w-full mb-9"
                          />

                          <span className="uppercase font-semibold text-sm text-primary-500-500">
                            {format(new Date(item.created_at), 'MMM dd. yy')}
                          </span>

                          <h4 className="font-semibold text-2xl">
                            <Link href={`/blog/${item.slug}`}>
                              {item.title}
                            </Link>
                          </h4>
                        </article>
                      )
                    })}
                  </>
                ) : (
                  <p>Undefined</p>
                )}
              </>
            )}
          </>
        </section>

        <section className="col-span-1 border rounded-sm py-5 px-4 sm:px-6">
          <h3 className="text-3xl font-semibold mb-6">Categorias</h3>
          <div className="flex flex-wrap gap-2">
            {isLoadingCategories ? (
              <p>Carregando...</p>
            ) : isErrorCategories ? (
              <p>Erro...</p>
            ) : dataCategories ? (
              <>
                {dataCategories.map((item) => {
                  return (
                    <Link
                      key={item.id}
                      href={`/blog?categoria=${item.slug}`}
                      className="font-semibold bg-gray-300 px-4 py-2 text-xs space tracking-widest uppercase hover:bg-primary-500 hover:text-white line-clamp-2 duration-300"
                    >
                      {item.title}
                    </Link>
                  )
                })}
              </>
            ) : (
              <p>Undefined</p>
            )}
          </div>
          <span
            onClick={showNewsByCategory}
            className="font-semibold bg-primary-500 px-4 py-2 text-xs space tracking-widest uppercase hover:bg-primary-500 text-center mt-5 hover:bg-opacity-95 line-clamp-2 hover:cursor-pointer text-white"
          >
            Ver Todas Noticias
          </span>
        </section>
      </div>
    </>
  )
}
