import { SocialMedias } from 'components/molecules/socialMedias/socialMedias'
import styles from './footer.module.scss'
import { roboto } from 'components/atoms/fonts/fonts'

export const Footer = () => {
  return (
    <footer className={`${styles.container} ${roboto.className}`}>
      <div className={styles.share}>
        <p>Compartilhe</p>

        <SocialMedias />
      </div>

      <div className={styles.comments}>
        <button>LEIA 100 COMENTÁRIOS</button>

        <p>
          * Para comentar, faça seu <span>login</span> ou <span>assine</span>
        </p>
      </div>
    </footer>
  )
}
