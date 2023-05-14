import { SocialMedias } from 'components/molecules/socialMedias/socialMedias'
import styles from './comments.module.scss'
import { roboto } from 'components/atoms/fonts/fonts'
import Link from 'next/link'

export const Comments = () => {
  return (
    <section className={`${styles.container} ${roboto.className}`}>
      <div className={styles.share}>
        <p>Compartilhe</p>

        <SocialMedias />
      </div>

      <div className={styles.comments}>
        <button>LEIA 100 COMENTÁRIOS</button>

        <p>
          * Para comentar, faça seu{' '}
          <Link href="/" aria-label="Direciona área login">
            login
          </Link>{' '}
          ou{' '}
          <Link href="/" aria-label="Direciona área de assinatura">
            assine
          </Link>
        </p>
      </div>
    </section>
  )
}
