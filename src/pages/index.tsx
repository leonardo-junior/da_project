import Head from 'next/head'
import { Merriweather } from 'next/font/google'
import { Home } from 'components/templates/home/home'

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Estado de Minas | Notícias</title>
        <meta name="description" content="Página principal de notícias de Minas Gerais" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={merriweather.className} style={{ minHeight: '100vh' }}>
        <Home />
      </main>
    </>
  )
}
