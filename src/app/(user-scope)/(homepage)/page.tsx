import { NextPage } from 'next'

import { ClientsCarousel } from '@/components/common/ClientsCarousel'
import { getMetaData } from '@/utils/seo/getMetaData'

import { Benefits } from './components/Benefits'
import { Features } from './components/Features'
import { Feedbacks } from './components/Feedbacks'
import { FormSection } from './components/FormSection'
import { Header } from './components/Header'
import { HowItWorks } from './components/HowItWorks'
import { Impacts } from './components/Impacts'
import { Questions } from './components/Questions'

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
      <Features />
      <Impacts />
      <Feedbacks />
      <Benefits />
      <ClientsCarousel />
      <Questions />
      <FormSection />
    </main>
  )
}

export default Page
