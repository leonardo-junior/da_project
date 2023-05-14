import Link from 'next/link'
import styles from './ad2.module.scss'
import Image from 'next/image'

export const Ad2 = () => {
  return (
    <nav>
      <Link href="/" aria-label="Direciona produto do anunciante">
        <ins className={styles.container} aria-label="Anúncio" role="complementary">
          <Image width={300} height={250} src="/ads/ad2.svg" alt="Anúncio" aria-label="Anúncio de produto" />

          <Image width={638} height={470} src="/ads/ad6.svg" alt="Anúncio" aria-label="Anúncio de produto" />
        </ins>
      </Link>
    </nav>
  )
}
