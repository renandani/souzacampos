'use client'

import { useGetBlogArticle } from '@/hooks/blog/getBlogArticle'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  XIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  WhatsappIcon,
  TelegramIcon,
  LinkedinIcon,
  PinterestIcon,
} from 'react-share'

export default function Article({ params }: { params: { slug: string } }) {
  const articleId = params.slug

  const { data, isLoading, isError } = useGetBlogArticle(articleId)

  if (isError) {
    return notFound()
  }

  return (
    <>
      <section className="bg-[url('../assets/images/bg-internal-page.png')] bg-center bg-no-repeat bg-cover py-10 relative text-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
          <div className="w-full flex justify-end items-center py-16 z-10">
            <div>
              <h2 className="text-4xl sm:text-6xl font-bold">Publicação</h2>
              <div className="flex gap-3">
                <Link href="/">Home</Link>

                <span>/</span>

                <span>Publicação</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 max-w-7xl mx-auto">
        <div className="px-4 sm:px-[50px]">
          {isLoading ? (
            <p>Carregando...</p>
          ) : isError ? (
            <p>Erro...</p>
          ) : data ? (
            <>
              {data && (
                <article key={data.id}>
                  <div className="sm:float-right mb-2 sm:m-5">
                    <Image
                      src={data.image_url}
                      alt=""
                      width={600}
                      height={315}
                    />
                  </div>

                  <div className="flex gap-4 mb-4">
                    {data.categories.map((item) => {
                      return (
                        <Link
                          key={item.id}
                          href={`/noticias?categoria=${item.slug}`}
                          className="font-semibold bg-primary-500 text-body px-4 py-2 text-xs space tracking-widest uppercase hover:bg-opacity-95 text-white"
                        >
                          {item.title}
                        </Link>
                      )
                    })}
                  </div>

                  <h1 className="text-2xl font-bold mb-4 italic text-gray-950">
                    {data.title}
                  </h1>

                  <p className="text-lg mb-4 italic text-gray-950">
                    {data.abstract}
                  </p>

                  <div
                    className="content-blog mb-8"
                    dangerouslySetInnerHTML={{ __html: data.content }}
                  />
                  <p className="text-gray-800 mb-2">
                    Compartilhe nas redes sociais:
                  </p>

                  <div className="flex gap-2 w-full">
                    <FacebookShareButton
                      url={`https://www.souzacampos.adv.br/blog/${articleId}`}
                    >
                      <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>

                    <WhatsappShareButton
                      url={`https://www.souzacampos.adv.br/blog/${articleId}`}
                    >
                      <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>

                    <TwitterShareButton
                      url={`https://www.souzacampos.adv.br/blog/${articleId}`}
                    >
                      <XIcon size={32} round={true} />
                    </TwitterShareButton>

                    <LinkedinShareButton
                      url={`https://www.souzacampos.adv.br/blog/${articleId}`}
                    >
                      <LinkedinIcon size={32} round={true} />
                    </LinkedinShareButton>

                    <TelegramShareButton
                      url={`https://www.souzacampos.adv.br/blog/${articleId}`}
                    >
                      <TelegramIcon size={32} round={true} />
                    </TelegramShareButton>

                    <PinterestShareButton
                      url={`https://www.souzacampos.adv.br/blog/${articleId}`}
                      media={''}
                    >
                      <PinterestIcon size={32} round={true} />
                    </PinterestShareButton>

                    <EmailShareButton
                      url={`https://www.souzacampos.adv.br/blog/${articleId}`}
                    >
                      <EmailIcon size={32} round={true} />
                    </EmailShareButton>
                  </div>
                </article>
              )}
            </>
          ) : (
            <p>Undefined</p>
          )}
        </div>
      </section>
    </>
  )
}
