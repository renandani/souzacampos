import { AiOutlineBulb } from 'react-icons/ai'

export function ThreeCards() {
  return (
    <section className="w-full z-20">
      <div className="flex flex-wrap items-center justify-between mx-auto p-6 sm:p-0">
        <div className="flex flex-wrap justify-end items-center -mt-16">
          <div className="w-full sm:w-5/6 grid grid-cols-1 sm:grid-cols-3">
            <div className="bg-primary-500 py-10 px-8">
              <div className="w-full flex justify-between">
                <div className="text-white text-4xl p-3 text-center inline-flex items-center justify-center w-16 h-16">
                  <AiOutlineBulb />
                </div>

                <div>
                  <h6 className="text-xl font-light text-white">
                    Disponibilidade Imediata
                  </h6>

                  <p className="mt-2 mb-4 text-white font-normal text-sm">
                    Tudo em um só lugar. Qualidade e eficiência, atendendo às
                    necessidades dos clientes com honestidade e transparência.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 py-10 px-8">
              <div className="w-full flex justify-between">
                <div className="text-gray-900 text-4xl p-3 text-center inline-flex items-center justify-center w-16 h-16">
                  <AiOutlineBulb />
                </div>

                <div>
                  <h6 className="text-xl font-light text-gray-900">
                    Anos de Experiência
                  </h6>

                  <p className="mt-2 mb-4 text-gray-700 font-normal text-sm">
                    Tenha a confiança de ter sua ação conduzida pelos melhores
                    profissionais da região.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white py-10 px-8">
              <div className="w-full flex justify-between">
                <div className="text-gray-900 text-4xl p-3 text-center inline-flex items-center justify-center w-16 h-16">
                  <AiOutlineBulb />
                </div>

                <div>
                  <h6 className="text-xl font-light text-gray-900">
                    Referência
                  </h6>

                  <p className="mt-2 mb-4 text-gray-700 font-normal text-sm">
                    Você possui a garantia de estar com um profissional exemplar
                    no mercado jurídico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
