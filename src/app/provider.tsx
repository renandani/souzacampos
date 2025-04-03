'use client'

import 'react-toastify/dist/ReactToastify.css'
import { Flowbite } from 'flowbite-react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ToastContainer } from 'react-toastify'
import { customTheme } from './customTheme'

export function Provider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>
    </QueryClientProvider>
  )
}
