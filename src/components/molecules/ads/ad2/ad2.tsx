import Link from 'next/link'
import styles from './ad2.module.scss'
import Image from 'next/image'

export const Ad2 = () => {
  return (
    <nav>
      <Link href="/" aria-label="Direciona produto do anunciante">
        <ins className={styles.container} aria-label="Anúncio" role="complementary">
          <Image
            width={300}
            height={250}
            src="https://i.imgur.com/HiKevof.png"
            alt="Anúncio"
            aria-label="Anúncio de produto"
          />

          <Image
            width={638}
            height={470}
            src="https://i.imgur.com/K8CCof9.png"
            alt="Anúncio"
            aria-label="Anúncio de produto"
          />
        </ins>
      </Link>
    </nav>
  )
}
