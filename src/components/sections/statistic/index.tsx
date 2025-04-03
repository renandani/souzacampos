'use client'

import Link from 'next/link'

export function Statistic() {
  return (
    <section id="dados" className="w-full pb-0 sm:py-20 bg-[#32376c] relative">
      <div className="bg-[url('../assets/images/bg2.png')] relative sm:absolute z-20 w-full sm:w-1/2 h-56 sm:h-full top-0 bottom-0 right-0 bg-left bg-cover hidden sm:block"></div>

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6 sm:p-0">
        <div className="w-full md:w-1/2 px-0">
          <div className="w-full mb-8">
            <h2 className="text-4xl sm:text-5xl text-white">
              Agilidade e competência:
              <br />
              Nossa visão de negócio
            </h2>
          </div>

          <p className="text-white leading-8 mb-5 max-w-xl">
            Na era da globalização e da comunicação digital, agilidade e
            competência são palavras chave. O mercado, mais do que nunca,
            acelera num ritmo rápido, que exige daqueles que nele estão
            inseridos a capacidade de acompanhamento necessário para sua
            sobrevivência.
          </p>

          <Link
            href="/escritorio"
            className="relative inline-block font-bold border border-white text-white min-w-[180px] capitalize text-sm px-9 py-5 text-center hover:bg-white hover:text-primary-400 transition-all"
          >
            Ler Mais
          </Link>
        </div>

        <div className="w-full md:w-1/2 relative z-30 flex flex-wrap gap-y-8 mt-10 sm:mt-0">
          <div className="w-full flex justify-center items-center">
            <div className="flex flex-col items-center justify-center flex-wrap w-44">
              <div className="text-white mb-2">
                <div className="flex items-center">
                  <h2 className="text-6xl">40</h2>
                </div>
              </div>

              <div className="text-white">
                <p>
                  <strong>Anos de Experiência</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="flex flex-col items-center justify-center flex-wrap w-44">
              <div className="text-white mb-2">
                <div className="flex items-center">
                  <h2 className="text-6xl">
                    60 <b>+</b>
                  </h2>
                </div>
              </div>

              <div className="text-white">
                <p>
                  <strong>Empresas</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="flex flex-col items-center justify-center flex-wrap w-44">
              <div className="text-white mb-2">
                <div className="flex items-center">
                  <h2 className="text-6xl">200</h2>
                </div>
              </div>

              <div className="text-white">
                <p>
                  <strong>Clientes Impactadas</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
