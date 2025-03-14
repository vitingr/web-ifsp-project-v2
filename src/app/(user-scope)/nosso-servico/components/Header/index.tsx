import { HalfImageBanner } from '@/components/common/HalfImageBanner'
import { Button } from '@/components/toolkit/Button'

import { ArrowRight } from '../icons/ArrowRight'

export const Header: React.FC = async () => {
  return (
    <HalfImageBanner
      image={{
        alt: 'Header Image',
        src: 'https://images5.alphacoders.com/650/650970.jpg',
        height: 4000,
        width: 6000
      }}
      className="items-center bg-neutral-100"
      imageClassName="2xl:max-h-[480px]"
    >
      <header className="flex flex-col gap-4 px-4 py-12 lg:gap-6 lg:p-0">
        <article className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold lg:text-4xl">
            Descubra como nossa plataforma transforma entregas
          </h1>
          <p className="text-sm text-neutral-600 lg:text-base">
            Saiba como conectar mercados, otimizar logística e garantir que seus
            pedidos cheguem com rapidez e eficiência. Tudo de forma simples e
            intuitiva.
          </p>
        </article>
        <Button
          className="mt-4 flex items-center gap-3 font-normal text-green-600 transition-all duration-300 hover:brightness-125"
          variant="custom"
        >
          <p className="text-sm lg:text-base">Quero saber mais</p>
          <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4" />
        </Button>
      </header>
    </HalfImageBanner>
  )
}
