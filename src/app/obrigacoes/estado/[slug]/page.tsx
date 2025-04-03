'use client'

import Link from 'next/link'
import { useGetObligationsState } from '@/hooks/information/obligations/getObligationsState'
import { notFound } from 'next/navigation'

export default function Article({ params }: { params: { slug: number } }) {
  const stateId = params.slug

  const { data, isLoading, isError } = useGetObligationsState(stateId)

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
                  <h2 className="text-4xl sm:text-6xl font-bold">Obrigações</h2>
                  <div className="flex gap-3">
                    <Link href="/">Home</Link>

                    <span>/</span>

                    <Link
                      href={`/obrigacoes/estado/${data[0].id}`}
                      className="hover:text-primary"
                    >
                      Obrigações
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-screen-xl flex flex-wrap items-center gap-y-4 mx-auto p-4 py-12">
            <div className="w-full grid grid-cols-2">
              {data.map((item) => {
                return (
                  <Link
                    key={item.id}
                    href={`/obrigacoes/${item.id}`}
                    className="text-xl font-bold tracking-tight text-gray-900 transition-all text-left hover:text-primary"
                  >
                    {item.title
                      .replace(
                        ' – Estado do Espirito Santo - ',
                        ' referente ao mês ',
                      )
                      .replace('/', ' de ')}
                  </Link>
                )
              })}
            </div>
          </section>
        </>
      ) : (
        <p>Undefined</p>
      )}
    </>
  )
}
