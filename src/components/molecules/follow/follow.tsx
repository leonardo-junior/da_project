import { merriweather, roboto } from 'components/atoms/fonts/fonts'
import styles from './follow.module.scss'
import Link from 'next/link'

export const Follow = () => {
  return (
    <section className={styles.container}>
      <h2 className={merriweather.className}>Fique sempre bem informado.</h2>

      <span />

      <div className={styles.googleNews}>
        <p className={roboto.className}>Siga o Estado de Minas no</p>

        <Link href="/" aria-label="Direciona ao site Google News">
          <img src="/google-news.svg" alt="Google News" />
        </Link>
      </div>
    </section>
  )
}
