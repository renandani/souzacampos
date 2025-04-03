'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'
import { useListAvailableHeros } from '@/hooks/heros/listAvailableHeros'
import Image from 'next/image'

export function Hero() {
  const { data, isLoading, isError } = useListAvailableHeros()

  return (
    <Swiper
      slidesPerView={1}
      mousewheel={false}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel]}
    >
      {isLoading ? (
        <p>Carregando</p>
      ) : isError ? (
        <p>Erro</p>
      ) : data ? (
        <>
          {data.map((item) => {
            const titleSplited = item.title.split(' ')

            return (
              <SwiperSlide key={item.id}>
                <div className="px-4 sm:px-14 relative w-full h-full sm:h-screen flex items-center min-h-[328px] pt-10 sm:pt-20">
                  {/* Image */}
                  <Image
                    src={item.image_url}
                    alt=""
                    width={1920}
                    height={1080}
                    className="absolute object-cover w-full h-full top-0 left-0 z-10"
                  />

                  <div className="relative w-full flex justify-center item-center flex-col z-20 text-center">
                    <span className="text-base sm:text-xl uppercase ml-0 sm:ml-2 text-gray-800">
                      Advocacia & Consultoria Legal
                    </span>

                    <h1 className="font-light text-4xl sm:text-7xl flex flex-wrap justify-center items-center uppercase my-5">
                      {titleSplited.map((word, index) => {
                        if (index === titleSplited.length - 1) {
                          return false
                        } else {
                          return `${word} `
                        }
                      })}

                      <span className="text-primary-500 ml-2 sm:ml-3">
                        {titleSplited[titleSplited.length - 1]}
                      </span>
                    </h1>

                    <p className="text-lg sm:text-2xl max-w-4xl ml-0 sm:ml-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </>
      ) : (
        <p>Undefined</p>
      )}
    </Swiper>
  )
}
