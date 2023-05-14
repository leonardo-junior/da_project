import Head from 'next/head'
import { Home } from 'components/templates/home/home'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Estado de Minas | Notícias</title>
        <meta name="description" content="Página principal de notícias de Minas Gerais" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Acompanhe as últimas notícias e fique bem informado o que acontece em Minas Gerais."
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Tamaki Ryushi" />
        <meta name="keywords" content="minas gerais, notícias, novidades"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </>
  )
}
