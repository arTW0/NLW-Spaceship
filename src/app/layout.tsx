import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'

const roboto = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto'
})

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree'
})

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Cápsula do tempo utilizando, React, Node, TypeScript e TailwindCSS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} font-sans text-gray-100 bg-gray-900`}
      >
        {children}
      </body>
    </html>
  )
}
