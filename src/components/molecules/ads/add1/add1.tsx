import { roboto } from 'components/atoms/fonts/fonts'
import styles from './add1.module.scss'

export const Add1 = () => {
  return (
    <aside className={styles.container}>
      <span className={roboto.className}>Publicidade</span>

      <img src="/publicity1.svg" alt="Publicidade" />
    </aside>
  )
}
