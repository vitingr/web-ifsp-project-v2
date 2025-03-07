import { NextPage } from 'next'

import { ClientsCarousel } from '@/components/common/ClientsCarousel'
import { getMetaData } from '@/utils/seo/getMetaData'

import { Features } from './components/Features'
import { Header } from './components/Header'

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
      <Features />
    </main>
  )
}

export default Page
