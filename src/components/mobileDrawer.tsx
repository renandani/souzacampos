import Link from 'next/link'
import { PiXThin } from 'react-icons/pi'
import logoImg from '@/assets/images/logo_mobile.png'
import Image from 'next/image'
import { useListAvailablePages } from '@/hooks/pages/listAvailablePages'
import { verifyTypePage } from '@/utils/verifyTypePage'

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const { data, isLoading, isError } = useListAvailablePages()

  return (
    <div
      className={`fixed sm:hidden flex flex-col justify-start items-start z-50 top-0 right-0 h-screen w-full bg-white text-black transition-transform duration-300 transform pt-10 pb-6 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <Image src={logoImg} alt="" className="mb-5 pl-4" />

      <button className="absolute right-4 top-4 p-3" onClick={onClose}>
        <PiXThin className="text-3xl" />
      </button>

      <ul className="w-full flex flex-col justify-center items-start">
        {isLoading ? (
          <span>Carregando</span>
        ) : isError ? (
          <span>Erro</span>
        ) : data ? (
          <>
            {data.map((page) => {
              const pageLink = verifyTypePage(page)

              return (
                <li key={page.id} className="w-full border-b px-3 py-4">
                  <Link href={pageLink} target={page.target} onClick={onClose}>
                    {page.title}
                  </Link>
                </li>
              )
            })}
          </>
        ) : (
          <span>Undefined</span>
        )}
      </ul>
    </div>
  )
}
