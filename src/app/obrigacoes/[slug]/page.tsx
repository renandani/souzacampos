'use client'

import Link from 'next/link'
import { useGetObligation } from '@/hooks/information/obligations/getObligations'
import { notFound } from 'next/navigation'

export default function Obligation({ params }: { params: { slug: number } }) {
  const obligationId = params.slug

  const { data, isLoading, isError } = useGetObligation(obligationId)

  if (isError) {
    return notFound()
  }

  return (
    <>
      {isLoading ? (
        <p>Carregando</p>
      ) : isError ? (
        <p>Erro</p>
      ) : data ? (
        <>
          <section className="bg-[url('../assets/images/bg-internal-page.png')] bg-center bg-no-repeat bg-cover py-10 relative text-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
              <div className="w-full flex justify-end items-center py-16 z-10">
                <div>
                  <h2 className="text-4xl sm:text-6xl font-bold">
                    {data.parent_id === 168
                      ? data.title.split('-')[0].split(' – ')[1]
                      : data.title}
                  </h2>
                  <div className="flex gap-3">
                    <Link href="/">Home</Link>

                    <span>/</span>

                    <Link
                      href={`/obrigacoes/estado/${data.id}`}
                      className="hover:text-primary"
                    >
                      {data.parent_id === 168
                        ? data.title.split('-')[0].split(' – ')[1]
                        : data.title}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-screen-xl flex flex-wrap items-center gap-y-4 mx-auto p-4 py-12">
            <div className="w-full">
              <h1 className="text-xl mb-2 font-bold tracking-tight text-gray-900 transition-all text-left">
                {data.title}
              </h1>

              <p className="mb-5">{data.description}</p>

              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
          </section>
        </>
      ) : (
        <p>Undefined</p>
      )}
    </>
  )
}
