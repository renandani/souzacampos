import { Metadata } from 'next'
import { BlogContent } from '@/components/contents/blogContent'

export const metadata: Metadata = {
  title: 'Blog do Escritório Souza Campos - Advocacia & Consultoria Legal',
  description:
    'Souza Campos - Advocacia & Consultoria Legal em Rio Claro - SP, especializada em project finance e business plans. Soluções para captação de recursos financeiros com segurança jurídica.',
  authors: [
    {
      name: 'TBrWeb - Tecnologia Brasil Web LTDA - EPP',
      url: 'https://tbrweb.com.br',
    },
  ],
}

export default function Blog() {
  return <BlogContent />
}
