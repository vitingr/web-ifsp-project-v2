import { HalfImageBanner } from '@/components/common/HalfImageBanner'

import { ModalForm } from './ModalForm'

export const FormSection: React.FC = async () => {
  return (
    <HalfImageBanner
      image={{
        alt: 'Header Image',
        src: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBwYW5lbHxlbnwwfHwwfHx8MA%3D%3D',
        height: 4000,
        width: 6000
      }}
      className="items-center bg-neutral-50"
      imageClassName="2xl:max-h-[615px] object-bottom"
    >
      <section className="flex flex-col gap-4 px-4 py-12 lg:gap-12 lg:py-0">
        <article className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold lg:text-4xl">
            Transformando o Mercado de Entregas
          </h1>
          <p className="text-sm text-neutral-600 lg:text-base">
            Combinamos inovação e tecnologia para oferecer soluções que conectam
            mercados a clientes com rapidez, eficiência e personalização.
          </p>
        </article>
        <ModalForm />
      </section>
    </HalfImageBanner>
  )
}
