import './globals.css'
import 'swiper/css'
import 'swiper/css/pagination'
import { Menu } from '@/components/nav/menuTreeNav'
import { Raleway } from 'next/font/google'

import { Provider } from './provider'
import { DefaultFooter } from '@/components/sections/footer/defaultFooter'

const font = Raleway({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>
        <Provider>
          <Menu />
          {children}
          <DefaultFooter />
        </Provider>
      </body>
    </html>
  )
}
