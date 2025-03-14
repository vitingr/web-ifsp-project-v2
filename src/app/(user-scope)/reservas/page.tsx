import { NextPage } from 'next'

import { ClientsCarousel } from '@/components/common/ClientsCarousel'
import { getMetaData } from '@/utils/seo/getMetaData'

import { FormSection } from '../(homepage)/components/FormSection'
import { About } from '../nosso-servico/components/About'
import { Header } from './components/Header'
import { Options } from './components/Options'

export async function generateMetadata() {
  return getMetaData({
    title: 'Alimentação Saudável e Sustentável | Sabor e Bem-Estar para Você',
    description:
      'Descubra como uma alimentação saudável pode transformar sua vida. Pratos frescos, nutritivos e sustentáveis para um futuro mais saudável e consciente.',
    image: '',
    url: '/reservas'
  })
}

const Page: NextPage = async () => {
  return (
    <main>
      <Header />
      <Options />
      <ClientsCarousel />
      <About />
      <FormSection />
    </main>
  )
}

export default Page
