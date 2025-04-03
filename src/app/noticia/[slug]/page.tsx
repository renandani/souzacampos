'use client'

import { useGetNews } from '@/hooks/information/news/getNews'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function Article({ params }: { params: { slug: string } }) {
  const newsId = params.slug

  const { data, isLoading, isError } = useGetNews(newsId)

  if (isError) {
    return notFound()
  }

  return (
    <>
      <section className="bg-[url('../assets/images/bg-internal-page.png')] bg-center bg-no-repeat bg-cover py-10 relative text-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
          <div className="w-full flex justify-end items-center py-16 z-10">
            <div>
              <h2 className="text-4xl sm:text-6xl font-bold">Notícia</h2>

              <div className="flex gap-3">
                <Link href="/">Home</Link>

                <span>/</span>

                <Link href="/noticias" className="hover:text-primary">
                  Notícias
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isLoading ? (
        <p>Carregando</p>
      ) : isError ? (
        <p>Erro</p>
      ) : data ? (
        <section className="max-w-screen-xl flex flex-wrap items-center gap-y-4 mx-auto p-4 py-12">
          <div className="w-full">
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 transition-all text-left">
              {data.title}
            </h1>

            <p className="mb-3 font-normal text-gray-700 text-left">
              {data.description}
            </p>

            <div
              className="h-96 rounded bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url("https://www.balaminut.com.br/img/noticias/${data.image}")`,
              }}
            ></div>

            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        </section>
      ) : (
        <p>Undefined</p>
      )}
    </>
  )
}
