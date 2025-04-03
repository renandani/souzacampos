'use client'

import Link from 'next/link'
import { useGetPublication } from '@/hooks/information/publications/getPublication'
import { notFound } from 'next/navigation'

export default function Publication({ params }: { params: { slug: string } }) {
  const publicationId = params.slug

  const { data, isLoading, isError } = useGetPublication(publicationId)

  if (isError) {
    return notFound()
  }

  return (
    <>
      <section className="bg-[url('../assets/images/bg-internal-page.png')] bg-center bg-no-repeat bg-cover py-10 relative text-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
          <div className="w-full flex justify-end items-center py-16 z-10">
            <div>
              <h2 className="text-4xl sm:text-6xl font-bold">Publicação</h2>

              <div className="flex gap-3">
                <Link href="/">Home</Link>

                <span>/</span>

                <Link href="/noticias" className="hover:text-primary">
                  Publicação
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

            <div dangerouslySetInnerHTML={{ __html: data.content }} />

            {data.children.map((item) => {
              return (
                <div key={item.id} className="flex">
                  <Link
                    href={`/publicacao/${item.id}`}
                    className="hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </div>
              )
            })}
          </div>
        </section>
      ) : (
        <p>Undefined</p>
      )}
    </>
  )
}
