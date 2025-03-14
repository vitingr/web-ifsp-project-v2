import { Star } from '@/assets/common/Star'
import { CustomSwiper } from '@/components/toolkit/CustomSwiper'

import { CLIENTS_LOGOS, FEDBACKS_DATA } from '../data'
import { mobileSliderOptions } from './data'

export const MobileSwiper: React.FC = () => {
  const cards = FEDBACKS_DATA.map((feedback, index: number) => (
    <div
      className="group flex min-h-[300px] w-full cursor-grab flex-col items-center gap-6 rounded-2xl border border-neutral-200 bg-white px-6 py-8  transition-all duration-300 lg:gap-12 lg:hover:scale-[1.02]"
      key={`feedback-mobile-${index}`}
    >
      <div className="flex w-full items-start gap-3">
        <figure className="flex w-full items-start justify-start">
          {CLIENTS_LOGOS[feedback.logo]}
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
        dangerouslySetInnerHTML={{ __html: feedback.content }}
      />
    </div>
  ))

  return (
    <div className="flex w-full lg:hidden">
      <CustomSwiper
        fadeColor="#f8fafc"
        options={mobileSliderOptions}
        slides={cards}
        swiperSlideClassName="cursor-grab"
        swiperStyleId="strechted"
        hasRightFade
      />
    </div>
  )
}
