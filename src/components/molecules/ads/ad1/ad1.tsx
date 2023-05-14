import { roboto } from 'components/atoms/fonts/fonts'
import styles from './ad1.module.scss'
import Link from 'next/link'

export const Ad1 = () => {
  return (
    <nav className={styles.container}>
      <Link href="/" aria-label="Direciona produto do anunciante">
        <ins className={styles.content} aria-label="Anúncio" role="complementary">
          <span className={roboto.className}>Publicidade</span>

          <img src="/ads/ad1.svg" alt="Anúncio" aria-label="Anúncio de produto" />
        </ins>
      </Link>
    </nav>
  )
}
