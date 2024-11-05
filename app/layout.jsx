import { Layout } from '@/components/dom/Layout'
import '@/styles/global.css'
import { Montserrat, Space_Grotesk } from 'next/font/google'

const montserrat = Montserrat({ 
    subsets: ['latin'],
    weight: ['300', '400', '500']
})
const spaceGrotesk = Space_Grotesk({ 
    subsets: ['latin'],
    weight: ['300', '400', '500']
})

export const metadata = {
  title: 'Flavio Manyari - Creative Developer',
  description: 'Flavio Manyari\'s web portfolio and blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
