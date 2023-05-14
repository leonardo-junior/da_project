import { roboto } from 'components/atoms/fonts/fonts'
import styles from './ad5.module.scss'
import Link from 'next/link'

export const Ad5 = () => {
  return (
    <nav>
      <Link href="/" aria-label="Direciona produto do anunciante">
        <ins className={styles.container} aria-label="Anúncio" role="complementary">
          <span className={roboto.className}>Publicidade</span>

          <img src="/ads/ad5.svg" alt="Anúncio" aria-label="Anúncio de produto" />
        </ins>
      </Link>
    </nav>
  )
}
