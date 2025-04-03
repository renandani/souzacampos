'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useListNews } from '@/hooks/information/news/listNews'
import { Pagination, usePagination } from 'pagination-react-js'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { AiOutlineSwapRight } from 'react-icons/ai'
import { notFound } from 'next/navigation'

export default function News() {
  const { currentPage } = usePagination(1, 8)
  const perPage = 8

  const { data, isLoading, isError, refetch } = useListNews({
    page: currentPage.get,
    perPage,
  })

  useEffect(() => {
    refetch()
  }, [currentPage.get, refetch])

  if (isError) {
    return notFound()
  }

  return (
    <>
      <section className="bg-[url('../assets/images/bg-internal-page.png')] bg-center bg-no-repeat bg-cover py-10 relative text-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
          <div className="w-full flex justify-end items-center py-16 z-10">
            <div>
              <h2 className="text-4xl sm:text-6xl font-bold">Notícias</h2>
              <div className="flex gap-3">
                <Link href="/">Home</Link>

                <span>/</span>

                <span>Notícias</span>
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
        <section className="w-full bg-gray-50">
          <div className="max-w-screen-xl flex flex-wrap items-center gap-y-4 mx-auto p-4 py-12">
            {data.data.map((item) => {
              const [ano, mes, dia] = item.created_at.split('T')[0].split('-')
              const [day, month] = format(
                new Date(Number(ano), Number(mes) - 1, Number(dia)),
                'dd MMM',
                { locale: ptBR },
              )
                .toUpperCase()
                .split(' ')

              return (
                <div key={item.id} className="w-full md:w-1/4 p-3">
                  <div className="bg-white relative overflow-hidden">
                    <div className="flex flex-col items-end leading-3 absolute right-0 top-0 pt-2 pr-4 bg-gray-50 date-news">
                      <span className="font-extrabold text-2xl z-10">
                        {day}
                      </span>
                      <span className="text-xl -mt-3 font-light z-10">
                        {month}
                      </span>
                    </div>
                    <Image
                      className="w-full"
                      src={`https://www.balaminut.com.br/img/noticias/${item.image}`}
                      width={300}
                      height={100}
                      alt=""
                    />

                    <div className="p-5">
                      <Link
                        href={`/noticia/${item.id}`}
                        className="mb-2 text-primary tracking-tight transition-all line-clamp-2 text-left"
                      >
                        {item.title}
                      </Link>

                      {item.description ? (
                        <p className="mb-3 font-normal text-gray-700 h-12 line-clamp-2 text-left">
                          {item.description}
                        </p>
                      ) : (
                        <p className="mb-3 font-normal text-gray-700 h-12 line-clamp-2 text-left">
                          {item.content.replace('<p>', '').replace('</p>', '')}
                        </p>
                      )}

                      <Link
                        href={`/noticia/${item.id}`}
                        className="mb-2 text-primary transition-all flex items-center gap-2 group"
                      >
                        Leia Mais <AiOutlineSwapRight />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}

            <hr className="md:min-w-full" />

            <Pagination
              entriesPerPage={perPage}
              totalEntries={data ? data.last_page : 0}
              currentPage={{ get: currentPage.get, set: currentPage.set }}
              offset={3}
              classNames={{
                wrapper: 'pagination m-auto',
                item: 'pagination-item',
                itemActive: 'pagination-item-active',
                navPrev: 'pagination-item nav-item',
                navNext: 'pagination-item nav-item',
                navStart: 'pagination-item nav-item',
                navEnd: 'pagination-item nav-item',
                navPrevCustom: 'pagination-item',
                navNextCustom: 'pagination-item',
              }}
              showFirstNumberAlways={true}
              showLastNumberAlways={true}
              navStart="&#171;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
              navEnd="&#187;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
              navPrev="&#x2039;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
              navNext="&#x203a;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
              navPrevCustom={{
                steps: 5,
                content:
                  '\u00B7\u00B7\u00B7' /* Here you can pass anything (Text, HTML Tag, React Component, ...) */,
              }}
              navNextCustom={{
                steps: 5,
                content:
                  '\u00B7\u00B7\u00B7' /* Here you can pass anything (Text, HTML Tag, React Component, ...) */,
              }}
            />
          </div>
        </section>
      ) : (
        <p>Undefined</p>
      )}
    </>
  )
}
