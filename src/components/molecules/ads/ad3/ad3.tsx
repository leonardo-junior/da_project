import { roboto } from 'components/atoms/fonts/fonts'
import styles from './ad3.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export const Ad3 = () => {
  return (
    <nav>
      <Link href="/" aria-label="Direciona produto do anunciante">
        <ins className={styles.container} aria-label="Anúncio" role="complementary">
          <span className={roboto.className}>Publicidade</span>

          <Image width={970} height={250} src="/ads/ad3.svg" alt="Anúncio" aria-label="Anúncio de produto" />
        </ins>
      </Link>
    </nav>
  )
}
