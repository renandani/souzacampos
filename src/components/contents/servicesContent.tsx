'use client'

import { useListAvailableServices } from '@/hooks/services/listAvailableServices'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function ServicesContent() {
  const { data, isLoading, isError } = useListAvailableServices()

  if (isError) {
    return notFound()
  }

  return (
    <>
      <section className="bg-[url('../assets/images/bg-internal-page.png')] bg-center bg-no-repeat bg-cover py-10 relative text-gray-800">
        <div className="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
          <div className="w-full flex justify-end items-center py-16 z-10">
            <div>
              <h2 className="text-4xl sm:text-6xl font-bold">Serviços</h2>
              <div className="flex gap-3">
                <Link href="/">Home</Link>

                <span>/</span>

                <span>Serviços</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 py-12 relative">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
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
                Ops… Tivemos um problema, por gentileza contate o administrador
                da plataforma.
              </p>
            ) : data ? (
              <>
                {data.map((service) => {
                  return (
                    <div
                      key={service.id}
                      className="bg-white rounded-sm border-b-4 border-white transition-all duration-300 hover:ease-in w-full py-10 pr-10"
                    >
                      <div className="w-full">
                        <Image
                          className="mb-3 w-16 h-16"
                          alt={service.icon}
                          src={service.icon_url}
                          width={50}
                          height={50}
                          loading="eager"
                        />
                        <h3 className="text-left font-medium text-2xl mb-3">
                          {service.title}
                        </h3>

                        <p className="line-clamp-2 mb-4">{service.abstract}</p>

                        <div className="flex justify-start w-full">
                          <Link
                            href={`servico/${service.slug}`}
                            className="mb-2 text-primary transition-all flex items-center gap-2 group uppercase border-b-2 border-primary-500 w-fit"
                          >
                            Leia Mais
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </>
            ) : (
              <p>Undefined</p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
