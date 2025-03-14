import { Button } from '@/components/toolkit/Button'
import { Container } from '@/components/toolkit/Container'
import { formatCurrency } from '@/utils/getters/getFormattedCurrency'

export const Options: React.FC = () => {
  return (
    <Container
      as="section"
      data-cid="reservation-options"
      wrapperClassName="bg-neutral-50 w-full py-12 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8 lg:max-w-7xl lg:gap-16">
        <article className="flex flex-col items-center gap-2">
          <h2 className="text-left text-2xl font-semibold lg:text-center lg:text-3xl">
            Nossas Opções de Reserva
          </h2>
          <p className="text-left text-sm text-neutral-600 lg:text-center lg:text-base">
            Oferecemos planos de reserva flexíveis para tornar sua experiência
            no nosso restaurante ainda mais agradável.{' '}
            <br className="hidden xl:block" /> Escolha o plano ideal para o seu
            momento!
          </p>
        </article>
        <ul className="mx-auto flex h-full w-full flex-col gap-6 lg:max-w-6xl lg:flex-row lg:items-stretch lg:justify-between lg:gap-12 lg:self-stretch">
          <li className="flex w-full flex-col gap-4 rounded-sm bg-white lg:gap-6">
            <hr
              className={`h-0.5 w-full rounded-t-sm border-none bg-gradient-to-r from-green-700 to-green-500 lg:h-4`}
            />
            <article className="flex flex-col items-center gap-2 px-4">
              <span className="w-fit rounded-full bg-green-50 px-2 py-1 text-center text-xs font-medium uppercase text-green-600">
                Reserva Grátis
              </span>
              <p className="text-center text-2xl lg:text-3xl">
                {formatCurrency(0)}/reserva
              </p>
              <p className="text-center text-xs text-neutral-600 lg:text-sm">
                Sem custos, apenas para garantir sua mesa
              </p>
            </article>
            <div className="flex h-full items-end px-4 pb-4 lg:pb-6">
              <Button
                className="min-w-full md:text-sm"
                variant="primaryOutline"
              >
                Reservar agora
              </Button>
            </div>
          </li>
          <li className="flex w-full flex-col gap-4 rounded-sm bg-white lg:gap-6">
            <hr
              className={`h-0.5 w-full rounded-t-sm border-none bg-gradient-to-r from-amber-600 to-amber-400 lg:h-4`}
            />
            <article className="flex flex-col items-center gap-2 px-4">
              <span className="w-fit rounded-full bg-amber-50 px-2 py-1 text-center text-xs font-medium uppercase text-yellow-700">
                Reserva Premium
              </span>
              <p className="text-center text-2xl lg:text-3xl">
                {formatCurrency(49.99)}/reserva
              </p>
              <p className="text-center text-xs text-neutral-600 lg:text-sm">
                Inclui benefícios exclusivos e mesa garantida
              </p>
            </article>
            <div className="flex h-full items-end px-4 pb-4 lg:pb-6">
              <Button
                className="min-w-full md:text-sm"
                variant="primaryOutline"
              >
                Reservar agora
              </Button>
            </div>
          </li>
        </ul>
        <p className="mx-auto -mt-4 text-xs text-neutral-500">
          * Valores sujeitos a alteração de preço
        </p>
      </div>
    </Container>
  )
}
