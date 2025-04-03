'use client'

import { useListAvailableProfessionals } from '@/hooks/professionals/listAvailableProfessionals'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Fragment } from 'react'

export function TeamContent() {
  const { data, isLoading, isError } = useListAvailableProfessionals()

  if (isError) {
    return notFound()
  }

  return (
    <>
      <section className="bg-[url('../assets/images/bg-internal-page.png')] bg-center bg-no-repeat bg-cover py-10 relative text-gray-800">
        <div className="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
          <div className="w-full flex justify-end items-center py-16 z-10">
            <div>
              <h2 className="text-4xl sm:text-6xl font-bold">Advogados</h2>
              <div className="flex gap-3">
                <Link href="/">Home</Link>

                <span>/</span>

                <span>Advogados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 py-12 relative">
          {isLoading ? (
            <>
              <div className="py-7 px-12 flex flex-col items-center justify-center animate-pulse bg-gray-300 w-[272px] sm:w-[370px] h-[450px]">
                <svg
                  className="w-20 h-20 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>

                <h2 className="uppercase font-bold text-sm text-center">
                  <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2"></div>
                  <div className="h-2.5 bg-gray-300 rounded-full w-10"></div>
                </h2>
              </div>

              <div className="py-7 px-12 flex flex-col items-center justify-center animate-pulse bg-gray-300 w-[272px] sm:w-[370px] h-[450px]">
                <svg
                  className="w-20 h-20 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>

                <h2 className="uppercase font-bold text-sm text-center">
                  <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2"></div>
                  <div className="h-2.5 bg-gray-300 rounded-full w-10"></div>
                </h2>
              </div>

              <div className="py-7 px-12 flex flex-col items-center justify-center animate-pulse bg-gray-300 w-[272px] sm:w-[370px] h-[450px]">
                <svg
                  className="w-20 h-20 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>

                <h2 className="uppercase font-bold text-sm text-center">
                  <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2"></div>
                  <div className="h-2.5 bg-gray-300 rounded-full w-10"></div>
                </h2>
              </div>
            </>
          ) : isError ? (
            <p>
              Ops… Tivemos um problema, por gentileza contate o administrador da
              plataforma.
            </p>
          ) : data ? (
            <>
              {data.map((item, index) => {
                return (
                  <div
                    className={`flex ${
                      index & 1 ? 'flex-row-reverse' : 'flex-row'
                    } flex-wrap w-full sm:mx-auto ${
                      data.length === index + 1 ? 'border-none' : 'border-b'
                    }`}
                    key={item.id}
                  >
                    <div className="w-full sm:w-1/3 text-center">
                      <Image
                        className="rounded-sm"
                        width={408}
                        src={item.image_url}
                        alt=""
                        height={100}
                      />
                    </div>

                    <div className="w-full sm:w-2/3 sm:pl-10 pt-8 flex flex-col justify-center items-start">
                      <div className="w-full mb-8">
                        <h2 className="text-2xl sm:text-6xl text-gray-800 uppercase">
                          {item.first_name} {item.last_name}
                        </h2>
                      </div>

                      <div
                        className="text-gray-600 text-xl leading-8"
                        dangerouslySetInnerHTML={{ __html: item.resume }}
                      />
                    </div>
                  </div>
                )
              })}
            </>
          ) : (
            <p>Undefined</p>
          )}
        </div>
      </section>
    </>
  )
}
