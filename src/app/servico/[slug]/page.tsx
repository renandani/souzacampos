'use client'

import { useGetService } from '@/hooks/services/getService'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function Services({ params }: { params: { slug: string } }) {
  const serviceId = params.slug

  const { data, isLoading, isError } = useGetService(serviceId)

  if (isError) {
    return notFound()
  }

  return (
    <>
      <section className="bg-[url('../assets/images/bg-internal-page.png')] bg-center bg-no-repeat bg-cover py-10 relative text-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
          {isLoading ? (
            <p>Carregando...</p>
          ) : isError ? (
            <p>Erro...</p>
          ) : data ? (
            <div className="w-full flex justify-end items-center py-16 z-10">
              <div>
                <h2 className="text-4xl sm:text-6xl font-bold">{data.title}</h2>
                <div className="flex gap-3">
                  <Link href="/">Home</Link>

                  <span>/</span>

                  <span>{data.title}</span>
                </div>
              </div>
            </div>
          ) : (
            <p>Undefined</p>
          )}
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 py-12">
          {isLoading ? (
            <p>Carregando...</p>
          ) : isError ? (
            <p>Erro...</p>
          ) : data ? (
            <>
              {data && (
                <article key={data.id}>
                  <h1 className="text-gray-900 text-4xl mb-4">{data.title}</h1>

                  <div
                    className="content-blog text-gray-900 mb-4"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />
                </article>
              )}
            </>
          ) : (
            <p>Undefined</p>
          )}
        </div>
      </section>
    </>
  )
}
