import { DesktopSwiper } from './DesktopSwiper'
import { MobileSwiper } from './MobileSwiper'

export const Feedbacks: React.FC = () => {
  return (
    <section className="flex w-full flex-col gap-8 bg-neutral-100 py-12 pl-4 lg:gap-16 lg:py-20">
      <DesktopSwiper />
      <MobileSwiper />
    </section>
  )
}
