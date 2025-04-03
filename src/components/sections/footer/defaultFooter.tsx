'use client'

import Link from 'next/link'
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaPhone,
} from 'react-icons/fa6'
import Image from 'next/image'
import logoImg from '@/assets/images/logo.png'

export function DefaultFooter() {
  return (
    <>
      <footer className="bg-white text-gray-500 relative border-t border-primary-500 border-opacity-30">
        <div className="max-w-screen-xl mx-auto pt-8 pb-8">
          <div className="flex flex-col px-4 sm:px-0 sm:flex-row">
            <div className="w-full md:w-6/12 lg:w-4/12 xl:w-5/12 text-start">
              <div>
                <div className="mt-5 mb-1">
                  <Link href="/" target="_blank">
                    <Image
                      src={logoImg}
                      width={533}
                      height={56}
                      className="w-4/5"
                      alt=""
                    />
                  </Link>
                </div>
              </div>

              <div>
                <div className="font-normal leading-8 mb-9">
                  <div>
                    <p>
                      Cada caso é único e merece ser tratado com a <br />
                      máxima dedicação e profissionalismo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-4/12 text-start">
              <h3 className="text-primary-500 text-xl font-semibold mt-7 mb-5 uppercase">
                Informações
              </h3>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div>
                    <FaLocationDot className="text-primary-500" />
                  </div>

                  <div>Av. 1, nº 511 - Centro, Rio Claro – SP</div>
                </div>

                <div className="flex items-center gap-2">
                  <div>
                    <FaPhone className="text-primary-500" />
                  </div>

                  <div>(19) 9 9663-5936</div>
                </div>

                <div className="flex items-center gap-2">
                  <div>
                    <FaEnvelope className="text-primary-500" />
                  </div>

                  <div>
                    <a href="mailto:contato@souzacampos.com.br">
                      contato@souzacampos.com.br
                    </a>
                  </div>
                </div>

                {/* <div className="flex items-center gap-2">
                      <div>
                        <FaClockRotateLeft className="text-primary-500" />
                      </div>

                      <div>24 horas por dia, 7 dias por semana</div>
                    </div> */}
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12 text-start">
              <h3 className="text-primary-500 text-xl font-semibold mt-7 mb-5 uppercase">
                Redes Socias
              </h3>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <a href="https://www.facebook.com/" target="_blank">
                    <FaFacebook className="text-primary-500" />
                  </a>

                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="hover:text-primary-500"
                  >
                    Facebook
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://www.instagram.com/souzacamposadvocacia"
                    target="_blank"
                  >
                    <FaInstagram className="text-primary-500" />
                  </a>

                  <a
                    href="https://www.instagram.com/souzacamposadvocacia"
                    target="_blank"
                    className="hover:text-primary-500"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section className="bg-white relative clear-both border-t">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex align-center">
            <div className="w-full text-center my-6">
              <p>© {new Date().getFullYear()} Copyright - TBrWeb</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
