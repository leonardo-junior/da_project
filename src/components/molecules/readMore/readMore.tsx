import { merriweather, roboto } from 'components/atoms/fonts/fonts'
import styles from './readMore.module.scss'
import Link from 'next/link'

export const ReadMore = () => {
  const readMore = [
    {
      id: 1,
      date: '08:57 - 10/06/2020',
      title: 'Oscar 2022: premiação ganha nova data para o próximo ano',
      src: 'https://i.imgur.com/dwcl5OT.png',
      dateTime: '2020-06-10T08:57',
    },
    {
      id: 2,
      date: '08:57 - 10/06/2020',
      title: 'O novo trailer de Eternos é tudo o que você precisava para entrar no hype da Marvel',
      src: 'https://i.imgur.com/naJ5gkS.png',
      dateTime: '2020-06-10T08:57',
    },
    {
      id: 3,
      date: '08:57 - 10/06/2020',
      title: 'Netflix fecha parceria com a Amblin, produtora de Steven Spielberg',
      src: 'https://i.imgur.com/Q1XVVbs.png',
      dateTime: '2020-06-10T08:57',
    },
  ]

  return (
    <section className={styles.container}>
      <span className={styles.line} />

      <div className={styles.content}>
        <h2 className={merriweather.className}>Leia mais</h2>

        <ul className={styles.news}>
          {readMore.map((read) => {
            return (
              <li key={read.id}>
                <Link href="/">
                  <img src={read.src} alt="Imagem notícia" />

                  <div>
                    <time dateTime={read.dateTime} className={roboto.className}>
                      {read.date}
                    </time>

                    <p className={merriweather.className}>{read.title}</p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      <span className={styles.line} />
    </section>
  )
}
