'use client'

import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { ErrorMessage } from '@/@types/errorWithMessage'
import { SendContactType } from '@/@types/settings'
import { api } from '@/lib/axios'

const fetchSendContact = async (params: SendContactType) => {
  const { data } = await api.post('/settings/send/contact', {
    name: params.name,
    phone: params.phone,
    email: params.email,
    msg: params.msg,
    token: params.token,
  })

  return data
}

export const useSendContact = () => {
  return useMutation(fetchSendContact, {
    onSuccess: () => {
      toast.success('Mensagem foi enviada com sucesso!', {
        position: toast.POSITION.TOP_CENTER,
      })
    },
    onError: (error) => {
      const err = error as ErrorMessage

      toast.error(`Ops... ${err.response?.data.message}`, {
        position: toast.POSITION.TOP_CENTER,
        toastId: 'Error',
      })
    },
  })
}
