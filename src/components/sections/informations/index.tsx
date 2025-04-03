'use client'

import { useGetObligationsState } from '@/hooks/information/obligations/getObligationsState'
import { useListQuotes } from '@/hooks/information/quotes/listNews'
import { useListSchedules } from '@/hooks/information/schedules/listSchedules'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

export function Informations() {
  const {
    data: dataListSchedules,
    isLoading: isLoadingListSchedules,
    error: errorListSchedules,
  } = useListSchedules()

  const {
    data: dataListQuotes,
    isLoading: isLoadingListQuotes,
    error: errorListQuotes,
  } = useListQuotes()

  const {
    data: dataListObligationsState,
    isLoading: isLoadingListObligationsState,
    error: errorListObligationsState,
  } = useGetObligationsState(152)

  return (
    <section id="atualize" className="bg-white w-full px-4 sm:px-16 py-20">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <div className="w-full flex items-center justify-between">
          <div className="w-full flex flex-wrap items-center justify-between mb-5 sm:mb-0">
            <div className="flex-1">
              <div className="w-full text-gray-900 mb-8">
                <span className="text-base font-normal uppercase flex items-center mb-5 text-gray-600">
                  Fique Sempre
                </span>

                <h2 className="text-3xl sm:text-5xl uppercase">
                  Informado<span className="text-primary-400">.</span>
                </h2>
              </div>
            </div>

            <Link
              href="publicacoes"
              className="relative inline-block font-bold border border-gray-900 text-gray-900 min-w-[180px] capitalize text-sm px-9 py-5 text-center hover:bg-gray-900 hover:text-white transition-all"
            >
              Ver Tudo
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col gap-y-4 sm:flex-row gap-x-8">
          {/* Schedules - Agenda Tributária */}
          <div className="w-full bg-white rounded-lg shadow-lg border border-gray-100">
            <div className="p-5">
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 transition-all line-clamp-2 text-left">
                Agenda Tributária
              </h3>

              <div className="h-60 overflow-auto">
                {isLoadingListSchedules ? (
                  <p>Carregando</p>
                ) : errorListSchedules ? (
                  <p>Erro</p>
                ) : dataListSchedules ? (
                  <>
                    {dataListSchedules.map((item) => {
                      return (
                        <p
                          key={item.id}
                          className="mb-3 font-normal text-gray-700 line-clamp-2 text-left"
                        >
                          {item.title}
                        </p>
                      )
                    })}
                  </>
                ) : (
                  <p>Undefined</p>
                )}
              </div>
            </div>
          </div>

          {/* ObligationsState - Obrigações Fiscais  */}
          <div className="w-full bg-white rounded-lg shadow-lg border border-gray-100 relative">
            <div className="p-5">
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 transition-all line-clamp-2 text-left">
                Obrigações Fiscais
              </h3>

              <div className="h-44 overflow-auto">
                {isLoadingListObligationsState ? (
                  <p>Carregando</p>
                ) : errorListObligationsState ? (
                  <p>Erro</p>
                ) : dataListObligationsState ? (
                  <>
                    {dataListObligationsState.map((item) => {
                      return (
                        <Link
                          key={item.id}
                          href={`/obrigacoes/${item.id}`}
                          className="mb-3 font-normal text-gray-700 text-left flex flex-col"
                        >
                          {item.title.replace('Obrigações Fiscais – ', '')}
                        </Link>
                      )
                    })}
                  </>
                ) : (
                  <p>Undefined</p>
                )}
              </div>
            </div>

            <Link
              href="obrigacoes"
              className="group w-full bg-gray-100 px-5 py-6 flex items-center justify-between absolute bottom-0"
            >
              <span className="group-hover:text-primary">
                Ver mais informações
              </span>

              <FaArrowRight className="group-hover:text-primary" />
            </Link>
          </div>

          {/* Quotes - Cotações  */}
          <div className="w-full bg-white rounded-lg shadow-lg border border-gray-100">
            <div className="p-5">
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 transition-all line-clamp-2 text-left">
                Cotações
              </h3>

              <div className="h-60 overflow-auto">
                {isLoadingListQuotes ? (
                  <p>Carregando</p>
                ) : errorListQuotes ? (
                  <p>Erro</p>
                ) : dataListQuotes ? (
                  <>
                    {dataListQuotes.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="mb-3 font-normal text-gray-700 text-left flex flex-col"
                        >
                          <b>
                            {item.title === 'Comercial' ||
                            item.title === 'Paralelo' ||
                            item.title === 'Turismo'
                              ? `Dolar ${item.title}`
                              : item.title}
                          </b>

                          {item.purchase > 0 && (
                            <span>Compra: R$ {item.purchase.toFixed(2)}</span>
                          )}

                          {item.sale > 0 && (
                            <span>Venda: R$ {item.sale.toFixed(2)}</span>
                          )}
                        </div>
                      )
                    })}
                  </>
                ) : (
                  <p>Undefined</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
