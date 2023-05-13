import { merriweather, roboto } from 'components/atoms/fonts/fonts'
import styles from './follow.module.scss'

export const Follow = () => {
  return (
    <div className={styles.container}>
      <h3 className={merriweather.className}>Fique sempre bem informado.</h3>

      <span />

      <div className={styles.googleNews}>
        <p className={roboto.className}>Siga o Estado de Minas no</p>

        <img src="/google-news.svg" alt="Google News" />
      </div>
    </div>
  )
}
