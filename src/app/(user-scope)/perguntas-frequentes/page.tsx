import { NextPage } from 'next'

import { getMetaData } from '@/utils/seo/getMetaData'

import { Header } from './components/Header'
import { Questions } from './components/Questions'

export async function generateMetadata() {
  return getMetaData({
    title: 'Alimentação Saudável e Sustentável | Sabor e Bem-Estar para Você',
    description:
      'Descubra como uma alimentação saudável pode transformar sua vida. Pratos frescos, nutritivos e sustentáveis para um futuro mais saudável e consciente.',
    image: '',
    url: '/perguntas-frequentes'
  })
}

const Page: NextPage = async () => {
  return (
    <main className="flex flex-col gap-12 px-4 pb-12 pt-28 lg:gap-16 lg:pb-20 lg:pt-32">
      <Header />
      <Questions />
    </main>
  )
}

export default Page
