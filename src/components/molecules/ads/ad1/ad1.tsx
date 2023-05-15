import { roboto } from 'components/atoms/fonts/fonts'
import styles from './ad1.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export const Ad1 = () => {
  return (
    <nav className={styles.container}>
      <Link href="/" aria-label="Direciona produto do anunciante">
        <ins className={styles.content} aria-label="Anúncio" role="complementary">
          <span className={roboto.className}>Publicidade</span>

          <Image
            width={300}
            height={50}
            src="https://i.imgur.com/ftARZfH.png"
            alt="Anúncio"
            aria-label="Anúncio de produto"
          />
        </ins>
      </Link>
    </nav>
  )
}
