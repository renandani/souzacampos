import 'swiper/css'
import { Hero } from '@/components/sections/hero'
import { Statistic } from '@/components/sections/statistic'
import { News } from '@/components/sections/news'
import { Informations } from '@/components/sections/informations'
import { SeoType } from '@/@types/seo'
import { Metadata } from 'next'

let jsonLd = {}

export async function generateMetadata(): Promise<Metadata> {
  const seo: SeoType = await fetch(`https://sgc.tbrweb.com.br/seo`, {
    method: 'get',
    headers: {
      'x-sgc-header': `${process.env.NEXT_PUBLIC_SGC_KEY}`,
      'x-ssr-enabled': `${process.env.NEXT_IS_SSR_ENABLED}`,
      [String(process.env.NEXT_SSR_HEADER)]: `${process.env.NEXT_SSR_ORIGIN}`,
    },
    next: { revalidate: 60 * 60 * 3 },
  })
    .then((res) => {
      return res.json()
    })
    .catch(() => {
      return {
        title: 'Souza Campos - Advocacia & Consultoria Legal',
        description:
          'Souza Campos - Advocacia & Consultoria Legal em Rio Claro - SP, especializada em project finance e business plans. Soluções para captação de recursos financeiros com segurança jurídica.',
      }
    })

  jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: seo.title,
    url: 'https://www.souzacampos.adv.br/',
    sameAs: [
      seo.schema_facebook,
      seo.schema_instagram,
      seo.schema_linkedin,
      seo.schema_twitter,
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: seo.schema_street,
      addressRegion: seo.schema_region,
      postalCode: seo.schema_cep,
      addressCountry: 'BR',
    },
  }

  return {
    title: seo.title,
    description: seo.description,
    publisher: seo.author,
    authors: {
      name: seo.author,
      url: 'https://www.tbrweb.com.br',
    },
    twitter: {
      site: 'https://souzacampos.adv.br',
      description: seo.description,
      creator: seo.author,
      images: 'https://souzacampos.adv.br/android-chrome-192x192.png',
      card: 'summary_large_image',
    },
    openGraph: {
      type: 'website',
      title: seo.title,
      description: seo.description,
      locale: 'pt-BR',
      countryName: seo.schema_country,
      images: 'https://souzacampos.adv.br/android-chrome-192x192.png',
      url: 'https://souzacampos.adv.br/',
    },
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      {/* Section - Hero */}
      <Hero />

      {/* Section - Statistic */}
      <Statistic />

      {/* Section - News */}
      <News />

      {/* Section - Informations */}
      <Informations />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.48053556281!2d-47.56560122391668!3d-22.410932320339594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7da573f812f2b%3A0x61c39a3debe4db80!2sAv.%201%2C%20511%20-%20Centro%2C%20Rio%20Claro%20-%20SP%2C%2013500-143!5e0!3m2!1spt-BR!2sbr!4v1721054492115!5m2!1spt-BR!2sbr"
        width="100%"
        height="415"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}
