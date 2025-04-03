'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import { FaEnvelope, FaLocationPin, FaPhoneVolume } from 'react-icons/fa6'
import { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { toast } from 'react-toastify'
import { useGetSettings } from '@/hooks/settings/getSettings'
import { useSendContact } from '@/hooks/settings/sendContactSettings'
import { useCreateLgpd } from '@/hooks/lgpd/createLgpd'
import { getIp } from '@/hooks/lgpd/getIp'

const formSchema = z.object({
  name: z
    .string()
    .min(3, 'Nome deve conter pelo menos 3 caracteres.')
    .max(128, 'Nome deve conter no máximo 128 caracteres.'),
  email: z.string().email(),
  phone: z
    .string()
    .min(8, 'Telefone deve conter pelo menos 8 caracteres.')
    .max(28, 'Telefone deve conter no máximo 128 caracteres.'),
  msg: z.string().optional(),
  lgpd: z.boolean(),
})

type formInputs = z.infer<typeof formSchema>

export function ContactContent() {
  const captchaRef = useRef<ReCAPTCHA>(null)

  const { data, isLoading, isError } = useGetSettings()

  const { mutateAsync: mutateAsyncSendContact } = useSendContact()

  const { mutateAsync: mutateAsyncCreateLgpd } = useCreateLgpd()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lgpd: false,
    },
  })

  async function handleSendInformations(values: formInputs) {
    const token = captchaRef?.current?.getValue()

    if (token === '' || token === undefined || token === null) {
      return toast.error(`Erro: Por favor, valide o reCAPTCHA`, {
        position: toast.POSITION.TOP_CENTER,
      })
    } else {
      const { ip } = await getIp()

      console.log(values)

      await mutateAsyncCreateLgpd({
        accept: values.lgpd,
        email: values.email,
        fingerprint: ip,
        name: values.name,
      })

      await mutateAsyncSendContact({
        name: values.name,
        phone: values.phone,
        email: values.email,
        msg: values.msg,
        token,
      })
    }

    captchaRef?.current?.reset()

    reset()
  }

  return (
    <>
      <section className="bg-[url('../assets/images/bg-internal-page.png')] bg-center bg-no-repeat bg-cover py-10 relative text-gray-800">
        <div className="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
          <div className="w-full flex justify-end items-center py-16 z-10">
            <div>
              <h2 className="text-4xl sm:text-6xl font-bold">Contato</h2>
              <div className="flex gap-3">
                <Link href="/">Home</Link>

                <span>/</span>

                <span>Contato</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-screen-xl flex flex-wrap items-center mx-auto">
          <article className="w-full my-24 px-4 sm:px-14 py-10 sm:py-14 bg-white shadow mx-1">
            <div className="w-full flex items-center justify-between gap-10">
              <div className="w-full flex flex-col sm:flex-row gap-5 sm:gap-0">
                <div className="w-full sm:w-7/12">
                  <span className="uppercase text-sm font-bold text-brand-red">
                    Fale conosco agora e
                  </span>

                  <h1 className="text-gray-900 text-4xl mb-4">
                    Tire suas Dúvidas!
                  </h1>

                  {isLoading ? (
                    <p>Carregando...</p>
                  ) : isError ? (
                    <p>Erro...</p>
                  ) : data ? (
                    <form
                      className="w-full mt-4"
                      onSubmit={handleSubmit(handleSendInformations)}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
                        <div className="relative z-0 w-full mb-2 group">
                          <input
                            id="name"
                            type="text"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            {...register('name')}
                          />

                          <label
                            htmlFor="name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Nome
                          </label>

                          {errors.name && (
                            <div className="text-red-500 text-xs italic mt-1 w-full">
                              {errors.name.message}
                            </div>
                          )}
                        </div>

                        <div className="relative z-0 w-full mb-2 group">
                          <input
                            id="email"
                            type="email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                            {...register('email')}
                          />
                          <label
                            htmlFor="email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email
                          </label>

                          {errors.email && (
                            <div className="text-red-500 text-xs italic mt-1 w-full">
                              {errors.email.message}
                            </div>
                          )}
                        </div>

                        <div className="relative z-0 w-full mb-2 group">
                          <input
                            type="text"
                            id="phone"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                            {...register('phone')}
                          />

                          <label
                            htmlFor="phone"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Telefone
                          </label>

                          {errors.phone && (
                            <div className="text-red-500 text-xs italic mt-1 w-full">
                              {errors.phone.message}
                            </div>
                          )}
                        </div>

                        <div className="relative z-0 w-full mb-2 group sm:col-span-3">
                          <textarea
                            id="msg"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                            {...register('msg')}
                          />

                          <label
                            htmlFor="msg"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Mensagem
                          </label>
                        </div>

                        {data.lgpd_forms && (
                          <div className="relative z-0 w-full mb-2 group mt-6 md:mt-0 sm:col-span-3 flex">
                            <input
                              {...register('lgpd')}
                              type="checkbox"
                              id="checkboxLGPD"
                              className="rounded border-zinc-500 h-4 w-4"
                              required
                            />

                            <label
                              htmlFor="checkboxLGPD"
                              className="font-light text-zinc-700 ml-2"
                            >
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: data.lgpd_forms,
                                }}
                              />
                            </label>
                          </div>
                        )}
                      </div>

                      {data.recaptcha_public && (
                        <div className="relative z-0 w-full mt-6 mb-2">
                          <ReCAPTCHA
                            sitekey={data.recaptcha_public}
                            ref={captchaRef}
                          />
                        </div>
                      )}

                      <button
                        type="submit"
                        className="relative inline-block font-bold border border-gray-900 text-gray-900 min-w-[180px] capitalize text-sm px-9 py-5 text-center hover:bg-gray-900 hover:text-white transition-all"
                      >
                        Enviar
                      </button>
                    </form>
                  ) : (
                    <p>Undefined</p>
                  )}
                </div>

                <div className="w-full sm:w-5/12 ml-0 sm:ml-8 my-auto">
                  <div
                    className="px-7 py-7 bg-primary-500 text-white"
                    data-background="assets/img/images/contact_img02.jpg"
                  >
                    <ul>
                      <li className="flex items-center border-b border-white border-dashed pb-6 mb-6">
                        <div className="w-16 h-16 flex items-center justify-center border-[5px] border-primary-400 border-opacity-75 bg-white rounded-full relative z-20 border-3 mr-6">
                          <FaPhoneVolume className="text-primary-400 " />
                        </div>
                        <div className="flex-1">
                          <h6 className="text-lg font-medium">Telefone</h6>
                          <a href="tel:5519996635936">+55 (19) 9 9663-5936</a>
                        </div>
                      </li>

                      <li className="flex items-center border-b border-white border-dashed pb-6 mb-6">
                        <div className="w-16 h-16 flex items-center justify-center border-[5px] border-primary-400 border-opacity-75 bg-white rounded-full relative z-20 border-3 mr-6">
                          <FaEnvelope className="text-primary-400 " />
                        </div>

                        <div className="flex-1">
                          <h6 className="text-lg font-medium">Email</h6>
                          <a
                            href="mailto:contato@souzacampos.com.br"
                            className="overflow-anywhere sm:whitespace-nowrap"
                          >
                            contato@souzacampos.com.br
                          </a>
                        </div>
                      </li>

                      <li className="flex items-center">
                        <div className="w-16 h-16 flex items-center justify-center border-[5px] border-primary-400 border-opacity-75 bg-white rounded-full relative z-20 border-3 mr-6">
                          <FaLocationPin
                            size={22}
                            className="text-primary-400 "
                          />
                        </div>

                        <div className="flex-1">
                          <h6 className="text-lg font-medium">Localização</h6>

                          <p>
                            Av. 1, nº 511
                            <br />
                            Centro, Rio Claro – SP
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.48053556281!2d-47.56560122391668!3d-22.410932320339594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7da573f812f2b%3A0x61c39a3debe4db80!2sAv.%201%2C%20511%20-%20Centro%2C%20Rio%20Claro%20-%20SP%2C%2013500-143!5e0!3m2!1spt-BR!2sbr!4v1721054492115!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  )
}
