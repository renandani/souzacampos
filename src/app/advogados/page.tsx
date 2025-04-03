import { TeamContent } from '@/components/contents/teamContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Advogados - Escritório de Advocacia SouzaCampos em Rio Claro – SP',
  description:
    'Conheça a equipe da Souza Campos - profissionais especializados em diversas áreas do direito e da consultoria empresarial, prontos para oferecer soluções jurídicas personalizadas.',
}

export default function Services() {
  return <TeamContent />
}
