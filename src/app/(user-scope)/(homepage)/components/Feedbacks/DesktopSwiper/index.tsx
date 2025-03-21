'use client'

import Image from 'next/image'
import { useCallback, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'

import { Star } from '@/assets/common/Star'
import strechtedStyles from '@/styles/components/strechted-carousel.module.scss'

import { FEDBACKS_DATA } from '../data'

export const DesktopSwiper: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null)

  const setSwiperRef = useCallback((swiper: SwiperType) => {
    if (swiper) {
      swiperRef.current = swiper
    }
  }, [])

  return (
    <div className="hidden w-full items-center justify-end lg:flex">
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
        className={`${strechtedStyles.strechtedHorizontalSwiper} no-scrollbar !ml-auto !mr-0 w-full max-w-[1900px] py-6`}
        onSwiper={setSwiperRef}
        scrollbar={{ draggable: true, hide: true, el: 'no-scrollbar' }}
        slidesPerView={8}
        spaceBetween={50}
      >
        {FEDBACKS_DATA.map((feedback, index: number) => (
          <SwiperSlide
            className="rounded-2xl border border-neutral-200 bg-white"
            key={`feedback-desktop-${index}`}
          >
            <div className="group flex h-auto w-full cursor-grab flex-col items-center gap-6 px-6 py-8  transition-all duration-300 lg:gap-12 lg:hover:scale-[1.02]">
              <div className="flex w-full items-start gap-3">
                <figure className="flex w-full items-start justify-start">
                  <Image
                    alt="Profile Image"
                    className="h-10 w-10 rounded-full"
                    height={120}
                    src="https://api-private.atlassian.com/users/bd764d2ef74af38956dbe34722a8aa67/avatar"
                    width={120}
                  />
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
                dangerouslySetInnerHTML={{ __html: feedback }}
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute inset-0 z-40 -ml-8 h-[320px] w-[180px] bg-gradient-to-r from-neutral-100 to-transparent" />
      </Swiper>
    </div>
  )
}
