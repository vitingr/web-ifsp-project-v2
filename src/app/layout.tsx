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
        {children}
      </body>
    </html>
  )
}
