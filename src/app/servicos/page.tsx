import { ServicesContent } from '@/components/contents/servicesContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Serviços - Escritório de Advocacia SouzaCampos em Rio Claro – SP',
  description:
    'Serviços jurídicos especializados em Direito Societário, Project Finance, Direito Imobiliário, Planejamento Patrimonial, Proteção de Dados (LGPD), Compliance e M&A.',
}

export default function Services() {
  return <ServicesContent />
}
