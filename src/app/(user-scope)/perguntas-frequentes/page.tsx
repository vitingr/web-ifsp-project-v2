import { NextPage } from 'next'

import { Footer } from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { getMetaData } from '@/utils/seo/getMetaData'

import { Header } from './components/Header'
import { Questions } from './components/Questions'

export async function generateMetadata() {
  return getMetaData({
    title: 'Perguntas Frequentes - Dúvidas Respondidas',
    description:
      'Tire suas dúvidas! Encontre respostas sobre entregas, cadastro, pagamentos e outros aspectos do serviço de forma clara e objetiva.',
    image: '',
    url: '/perguntas-frequentes'
  })
}

const Page: NextPage = async () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-12 px-4 pb-12 pt-28 lg:gap-16 lg:pb-20 lg:pt-32">
        <Header />
        <Questions />
      </main>
      <Footer />
    </>
  )
}

export default Page
