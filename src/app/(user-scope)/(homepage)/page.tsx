import { NextPage } from 'next'

import { ClientsCarousel } from '@/components/common/ClientsCarousel'
import { getMetaData } from '@/utils/seo/getMetaData'

import { Features } from './components/Features'
import { Feedbacks } from './components/Feedbacks'
import { FormSection } from './components/FormSection'
import { Header } from './components/Header'
import { HowItWorks } from './components/HowItWorks'
import { Impacts } from './components/Impacts'

export async function generateMetadata() {
  return getMetaData({
    description: '',
    image: '',
    title: '',
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
      <FormSection />
    </main>
  )
}

export default Page
