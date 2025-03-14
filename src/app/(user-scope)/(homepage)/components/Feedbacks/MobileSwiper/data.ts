import { SwiperOptions } from 'swiper/types'

export const desktopSliderOptions: SwiperOptions = {
  pagination: {
    clickable: true,
    enabled: true
  },
  breakpoints: {
    300: {
      slidesPerView: 1.2
    },
    500: {
      slidesPerView: 1.3
    },
    700: {
      slidesPerView: 2.4
    },
    1024: {
      slidesPerView: 3
    }
  },
  spaceBetween: 16,
  slidesOffsetBefore: 16,
  slidesOffsetAfter: 16,
  loop: true
}

export const mobileSliderOptions: SwiperOptions = {
  pagination: {
    clickable: true
  },
  breakpoints: {
    300: {
      slidesPerView: 1.2
    },
    500: {
      slidesPerView: 1.3
    },
    700: {
      slidesPerView: 3.1
    },
    1024: {
      slidesPerView: 3.6
    }
  },
  spaceBetween: 16,
  slidesOffsetBefore: 16,
  slidesOffsetAfter: 16,
  loop: true
}
