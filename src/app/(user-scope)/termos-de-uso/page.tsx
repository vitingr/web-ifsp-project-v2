import { NextPage } from 'next'

import { getMetaData } from '@/utils/seo/getMetaData'

import { Header } from './components/Header'
import { Paragraphs } from './components/Paragraphs'

export async function generateMetadata() {
  return getMetaData({
    title: 'Alimentação Saudável e Sustentável | Sabor e Bem-Estar para Você',
    description:
      'Descubra como uma alimentação saudável pode transformar sua vida. Pratos frescos, nutritivos e sustentáveis para um futuro mais saudável e consciente.',
    image: '',
    url: '/termos-de-uso'
  })
}

const Page: NextPage = async () => {
  return (
    <main>
      <Header />
      <Paragraphs />
    </main>
  )
}

export default Page
