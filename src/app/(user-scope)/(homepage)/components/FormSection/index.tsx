import { HalfImageBanner } from '@/components/common/HalfImageBanner'

import { ModalForm } from './ModalForm'

export const FormSection: React.FC = async () => {
  return (
    <HalfImageBanner
      image={{
        alt: 'Header Image',
        src: 'https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/healthy-restaurants-cover.jpg',
        height: 4000,
        width: 6000
      }}
      className="items-center bg-neutral-50"
      imageClassName="2xl:max-h-[615px] lg:min-h-[400px] 2xl:min-h-[300px] object-bottom"
    >
      <section className="flex flex-col gap-4 px-4 py-12 lg:gap-12 lg:py-0">
        <article className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold lg:text-4xl">
            Parcerias Saudáveis para o Seu Mercado
          </h1>
          <p className="text-sm text-neutral-600 lg:text-base">
            Junte-se a nós e ofereça aos seus clientes uma opção de alimentação
            saudável e sustentável. Criamos parcerias que conectam mercados e
            restaurantes com produtos frescos e orgânicos, promovendo uma
            alimentação consciente e de qualidade.
          </p>
        </article>
        <ModalForm />
      </section>
    </HalfImageBanner>
  )
}
