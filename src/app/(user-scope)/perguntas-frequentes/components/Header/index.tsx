import { Container } from '@/components/toolkit/Container'

export const Header: React.FC = async () => {
  return (
    <Container
      as="header"
      className="mx-auto flex w-full flex-col gap-2"
      data-cid="faq-header"
      wrapperClassName="mx-auto w-full max-w-2xl lg:max-w-7xl"
      disableSidePadding
    >
      <p className="animate__animated animate__fadeIn bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-center text-sm font-semibold text-transparent lg:text-left lg:text-base">
        FAQ
      </p>
      <h1 className="animate__animated animate__fadeIn text-center text-2xl font-semibold lg:text-left lg:text-4xl">
        Perguntas frequentes
      </h1>
    </Container>
  )
}
