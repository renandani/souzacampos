import { ContactContent } from '@/components/contents/contactContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Entre em Contato com a Souza Campos - Rio Claro SP',
  description:
    'O Escritório Souza Campos está Localizado em Rio Claro SP. Nossos telefones: (19) 9 9663-5936. Av. 1, nº 511 - Centro Rio Claro SP, 13500-143!',
}

export default function ContactPage() {
  return <ContactContent />
}
