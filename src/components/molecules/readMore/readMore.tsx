import { merriweather, roboto } from 'components/atoms/fonts/fonts'
import styles from './readMore.module.scss'

export const ReadMore = () => {
  const readMore = [
    {
      id: 1,
      date: '08:57 - 10/06/2020',
      title: 'Oscar 2022: premiação ganha nova data para o próximo ano',
      src: '/readMore1.svg',
    },
    {
      id: 2,
      date: '08:57 - 10/06/2020',
      title: 'O novo trailer de Eternos é tudo o que você precisava para entrar no hype da Marvel',
      src: '/readMore2.svg',
    },
    {
      id: 3,
      date: '08:57 - 10/06/2020',
      title: 'Netflix fecha parceria com a Amblin, produtora de Steven Spielberg',
      src: '/readMore3.svg',
    },
  ]

  return (
    <div className={styles.container}>
      <span className={styles.line} />

      <div className={styles.content}>
        <h2 className={merriweather.className}>Leia mais</h2>

        <div className={styles.news}>
          {readMore.map((read) => {
            return (
              <div key={read.id}>
                <img src={read.src} alt="Imagem" />

                <div>
                  <span className={roboto.className}>{read.date}</span>

                  <p className={merriweather.className}>{read.title}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <span className={styles.line} />
    </div>
  )
}
