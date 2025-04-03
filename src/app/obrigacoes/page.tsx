'use client'

import Link from 'next/link'
import { useListObligationsStates } from '@/hooks/information/obligations/listObligationsStates'
import { notFound } from 'next/navigation'

export default function ObligationsStates() {
  const { data, isLoading, isError } = useListObligationsStates()

  if (isError) {
    return notFound()
  }

  return (
    <>
      <section className="bg-[url('../assets/images/bg-internal-page.png')] bg-center bg-no-repeat bg-cover py-10 relative text-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
          <div className="w-full flex justify-end items-center py-16 z-10">
            <div>
              <h2 className="text-4xl sm:text-6xl font-bold">
                Obrigações por Estado
              </h2>
              <div className="flex gap-3">
                <Link href="/">Home</Link>

                <span>/</span>

                <Link href="/obrigacoes" className="hover:text-primary">
                  Obrigações por Estado
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
          {data.map((item) => {
            return (
              <div key={item.id} className="w-full md:w-1/3 px-2">
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow p-5">
                  <Link
                    href={`/obrigacoes/estado/${item.id}`}
                    className="text-lg font-bold tracking-tight text-gray-900 transition-all text-left hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            )
          })}
        </section>
      ) : (
        <p>Undefined</p>
      )}
    </>
  )
}
