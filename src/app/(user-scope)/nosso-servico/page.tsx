import { NextPage } from 'next'

import { ClientsCarousel } from '@/components/common/ClientsCarousel'
import { getMetaData } from '@/utils/seo/getMetaData'

import { Benefits } from '../(homepage)/components/Benefits'
import { FormSection } from '../(homepage)/components/FormSection'
import { HowItWorks } from '../(homepage)/components/HowItWorks'
import { About } from './components/About'
import { BookNow } from './components/BookNow'
import { Header } from './components/Header'

export async function generateMetadata() {
  return getMetaData({
    title: 'Alimentação Saudável e Sustentável | Sabor e Bem-Estar para Você',
    description:
      'Descubra como uma alimentação saudável pode transformar sua vida. Pratos frescos, nutritivos e sustentáveis para um futuro mais saudável e consciente.',
    image: '',
    url: '/'
  })
}

const Page: NextPage = async () => {
  return (
    <main>
      <Header />
      <ClientsCarousel />
      <HowItWorks />
      <About />
      <ClientsCarousel />
      <BookNow />
      <Benefits />
      <FormSection />
    </main>
  )
}

export default Page
