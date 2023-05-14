import { SocialMedias } from 'components/molecules/socialMedias/socialMedias'
import styles from './comments.module.scss'
import { roboto } from 'components/atoms/fonts/fonts'
import Link from 'next/link'

export const Comments = () => {
  return (
    <footer className={`${styles.container} ${roboto.className}`}>
      <div className={styles.share}>
        <p>Compartilhe</p>

        <SocialMedias />
      </div>

      <div className={styles.comments}>
        <button>LEIA 100 COMENTÁRIOS</button>

        <p>
          * Para comentar, faça seu <Link href="/">login</Link> ou <Link href="/">assine</Link>
        </p>
      </div>
    </footer>
  )
}
