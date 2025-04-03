'use client'

import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useListNews } from '@/hooks/information/news/listNews'

export function News() {
  const { data, isLoading, isError } = useListNews({ page: 1, perPage: 3 })

  return (
    <section id="noticias" className="w-full py-20 px-4 sm:px-16 bg-gray-50">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <div className="w-full flex flex-wrap items-center justify-between mb-5 sm:mb-0">
          <div className="flex-1">
            <div className="w-full text-gray-900 mb-8">
              <span className=" text-base font-normal uppercase flex items-center mb-5 text-gray-600">
                Atualize-se
              </span>

              <h2 className="text-3xl sm:text-5xl uppercase">
                Últimas Publicações<span className="text-primary-400">.</span>
              </h2>
            </div>
          </div>

          <Link
            href="noticias"
            className="relative inline-block font-bold border border-gray-900 text-gray-900 min-w-[180px] capitalize text-sm px-9 py-5 text-center hover:bg-gray-900 hover:text-white transition-all"
          >
            Ler Mais
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {isLoading ? (
            <p>Carregando</p>
          ) : isError ? (
            <p>Erro</p>
          ) : data ? (
            data.data.map((item) => {
              const [ano, mes, dia] = item.created_at.split('T')[0].split('-')
              const [day, month] = format(
                new Date(Number(ano), Number(mes) - 1, Number(dia)),
                'dd MMM',
                { locale: ptBR },
              )
                .toUpperCase()
                .split(' ')

              return (
                <div
                  key={item.id}
                  className="w-full shadow-lg border border-gray-100"
                >
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
                        className="text-primary tracking-tight transition-all line-clamp-2 text-left text-2xl mb-5"
                      >
                        {item.title}
                      </Link>

                      <Link
                        href={`/noticia/${item.id}`}
                        className="mb-2 text-primary transition-all flex items-center gap-2 group uppercase border-b-2 border-primary-500 w-fit"
                      >
                        Leia Mais
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <p>Undefined</p>
          )}
        </div>
      </div>
    </section>
  )
}
