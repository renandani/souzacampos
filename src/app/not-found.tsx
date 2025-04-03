'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-white h-[60vh] flex items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
            404
          </h1>

          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
            Oops... Página não encontrada
          </p>

          <p className="mb-4 text-lg font-light text-gray-500">
            Desculpe, não conseguimos encontrar essa página. Você encontrará
            muito para explorar na página no Home.
          </p>

          <Link
            href="/"
            className="relative inline-block font-bold border border-gray-900 text-gray-900 min-w-[180px] capitalize text-sm px-9 py-5 text-center hover:bg-gray-900 hover:text-white transition-all"
          >
            Voltar para a Home
          </Link>
        </div>
      </div>
    </section>
  )
}
