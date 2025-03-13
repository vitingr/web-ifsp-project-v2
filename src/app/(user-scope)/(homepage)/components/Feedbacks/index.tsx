'use client'

import { useCallback, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'

import { Star } from '@/assets/common/Star'

import { CLIENTS_LOGOS, FEDBACKS_DATA } from './data'

export const Feedbacks: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null)

  const setSwiperRef = useCallback((swiper: SwiperType) => {
    if (swiper) {
      swiperRef.current = swiper
    }
  }, [])

  // const nextSlide = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.slideNext()
  //   }
  // }

  // const previousSlide = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.slidePrev()
  //   }
  // }

  return (
    <section className="flex w-full flex-col gap-8 bg-neutral-100 py-12 pl-4 lg:gap-16 lg:py-20">
      <div className="flex w-full items-center justify-end">
        <Swiper
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 4.2,
              spaceBetween: 25
            }
          }}
          className="no-scrollbar !ml-auto !mr-0 w-full max-w-[1900px] py-6"
          onSwiper={setSwiperRef}
          scrollbar={{ draggable: true, hide: true, el: 'no-scrollbar' }}
          slidesPerView={8}
          spaceBetween={50}
        >
          {FEDBACKS_DATA.map((partner, index: number) => (
            <SwiperSlide key={`${partner.logo}-${index}`}>
              <div className="group flex min-h-[300px] w-full cursor-grab flex-col items-center gap-6 rounded-2xl border border-neutral-200 bg-white px-6 py-8  transition-all duration-300 lg:gap-12 lg:hover:scale-[1.02]">
                <div className="flex w-full items-start gap-3">
                  <figure className="flex w-full items-start justify-start">
                    {CLIENTS_LOGOS[partner.logo]}
                  </figure>
                  <div className="flex w-full items-start justify-end gap-1">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
                <p
                  className={`flex items-end text-base lg:text-xl ${index === 6 ? '-mt-6' : 'mt-0'}`}
                  dangerouslySetInnerHTML={{ __html: partner.content }}
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="absolute inset-0 z-40 -ml-8 h-[320px] w-[180px] bg-gradient-to-r from-neutral-100 to-transparent" />
        </Swiper>
      </div>
    </section>
  )
}
