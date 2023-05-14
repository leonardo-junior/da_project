import Link from 'next/link'
import styles from './ad2.module.scss'

export const Ad2 = () => {
  return (
    <nav>
      <Link href="/" aria-label="Direciona produto do anunciante">
        <ins className={styles.container} aria-label="Anúncio" role="complementary">
          <img src="/ads/ad2.png" alt="Anúncio" aria-label="Anúncio de produto" />

          <img src="/ads/ad6.png" alt="Anúncio" aria-label="Anúncio de produto" />
        </ins>
      </Link>
    </nav>
  )
}
