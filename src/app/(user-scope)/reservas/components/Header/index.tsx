import { Container } from '@/components/toolkit/Container'

export const Header: React.FC = () => {
  return (
    <Container
      as="section"
      data-cid="pricing-header"
      wrapperClassName="bg-neutral-100 pb-12 pt-28 lg:pb-20 lg:pt-32"
    >
      <header className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-4 lg:max-w-7xl lg:gap-8">
        <article className="flex w-full flex-col gap-2">
          <h1 className="animate__animated animate__fadeIn text-center text-2xl font-semibold lg:text-4xl">
            Agora você pode reservar <br className="hidden xl:block" />
            <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-green-600 bg-clip-text text-2xl text-transparent lg:text-4xl">
              seu lugar a qualquer momento!
            </span>
          </h1>
          <p className="animate__animated animate__fadeIn w-full text-center text-sm lg:text-base">
            Realize a reserva da sua mesa na nossa plataforma e evite{' '}
            <br className="hidden xl:block" /> de esperar em nossas filas de
            espera presenciais.
          </p>
        </article>
      </header>
    </Container>
  )
}
