import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://sgc.tbrweb.com.br',
  headers: { 'x-sgc-header': process.env.NEXT_PUBLIC_SGC_KEY },
})
