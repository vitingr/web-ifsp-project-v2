import { NextPage } from 'next'

import { ClientsCarousel } from '@/components/common/ClientsCarousel'
import { Footer } from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { getMetaData } from '@/utils/seo/getMetaData'

import { FormSection } from '../(homepage)/components/FormSection'
import { About } from '../nosso-servico/components/About'
import { Header } from './components/Header'
import { Options } from './components/Options'

export async function generateMetadata() {
  return getMetaData({
    title: 'Termos de Uso - Regras e Condições',
    description:
      'Leia os Termos de Uso e entenda as condições e responsabilidades para utilizar nossos serviços de forma segura e transparente.',
    image: '',
    url: '/reservas'
  })
}

const Page: NextPage = async () => {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <Options />
        <ClientsCarousel />
        <About />
        <FormSection />
      </main>
      <Footer />
    </>
  )
}

export default Page
