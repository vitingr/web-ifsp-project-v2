import { Footer } from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import ToastMessage from '@/components/toolkit/ToastMessage'
import { APP_FONT } from '@/constants/font'

import '@/styles/index.scss'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`${APP_FONT.className}`}>
        <ToastMessage />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
