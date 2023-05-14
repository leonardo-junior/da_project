import Head from 'next/head'
import { Home } from 'components/templates/home/home'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Estado de Minas | Notícias</title>
        <meta name="description" content="Página principal de notícias de Minas Gerais" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </>
  )
}
