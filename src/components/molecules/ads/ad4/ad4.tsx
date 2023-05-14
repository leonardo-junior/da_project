import Link from 'next/link'
import styles from './ad4.module.scss'
import Image from 'next/image'

export const Ad4 = () => {
  return (
    <nav>
      <Link href="/" aria-label="Direciona produto do anunciante">
        <ins className={styles.container} aria-label="Anúncio" role="complementary">
          <Image width={300} height={250} src="/ads/ad4.svg" alt="Anúncio" aria-label="Anúncio de produto" />
        </ins>
      </Link>
    </nav>
  )
}
