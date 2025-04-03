'use client'

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

import logoImg from '@/assets/images/logo.png'
import logoMobileImg from '@/assets/images/logo-mob.png'
import Image from 'next/image'
import { MobileDrawer } from '@/components/mobileDrawer'
import { PiListThin } from 'react-icons/pi'
import { useListAvailablePages } from '@/hooks/pages/listAvailablePages'
import { verifyTypePage } from '@/utils/verifyTypePage'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'

export function Menu() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }
  const { data, isLoading, isError } = useListAvailablePages()

  const [y, setY] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setY(window.scrollY)
    }
  }, [])

  const handleNavigation = useCallback((e: WindowEventMap['scroll']) => {
    const window = e.currentTarget as Window

    setY(window.scrollY)
  }, [])

  useEffect(() => {
    setY(window.scrollY)

    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  return (
    <div
      className={`py-4 sm:py-0 sm:fixed flex mx-auto w-full px-4 sm:px-14 justify-between items-center z-50 duration-300 ${
        y > 0 ? 'h-auto sm:h-20 bg-white top-0 shadow' : 'top-9 h-auto sm:h-24'
      }`}
    >
      <Link href={'/'}>
        <Image
          src={logoImg}
          width={475}
          height={132}
          alt=""
          className={`hidden sm:block duration-300 ${y > 0 ? 'w-52' : 'w-fit'}`}
        />
      </Link>

      <Link href={'/'}>
        <Image
          src={logoImg}
          alt=""
          className={` block sm:hidden duration-300`}
        />
      </Link>

      <button className="sm:hidden" type="button" onClick={handleDrawerToggle}>
        <PiListThin className="text-3xl" />
      </button>

      <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />

      <div className="hidden sm:flex items-center gap-10">
        <ul className="gap-4 justify-center">
          {isLoading ? (
            <span>Carregando</span>
          ) : isError ? (
            <span>Erro</span>
          ) : data ? (
            <>
              {data.map((page) => {
                const pageLink = verifyTypePage(page)

                return (
                  <Link
                    key={page.id}
                    href={pageLink}
                    target={page.target}
                    className="relative mx-0 lg:mx-4 2xl:mx-4 3xl:mx-7 md:after:content-none lg:after:content-[''] after:absolute after:w-[6px] after:h-[6px] after:bg-brand-sec after:rounded-full after:top-1/2 after:-translate-y-1/2 after:-right-8 hover:text-brand-sec transition-all duration-300 font-medium"
                  >
                    {page.title}
                  </Link>
                )
              })}
            </>
          ) : (
            <span>Undefined</span>
          )}
        </ul>

        <div className="flex">
          <ul className="whitespace-nowrap flex justify-end">
            <li className="inline-block">
              <span className="w-full flex">
                <a
                  href="https://www.instagram.com/souzacamposadvocacia"
                  className="mr-3"
                  target="_blank"
                >
                  {' '}
                  <FaInstagram className="text-primary-500" />
                </a>

                <a
                  href="https://www.facebook.com/"
                  className="mr-3"
                  target="_blank"
                >
                  <FaFacebook className="text-primary-500" />
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
