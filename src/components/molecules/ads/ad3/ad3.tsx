import { roboto } from 'components/atoms/fonts/fonts'
import styles from './ad3.module.scss'

export const Ad3 = () => {
  return (
    <aside className={styles.container}>
      <span className={roboto.className}>Publicidade</span>

      <img src="/ad3.svg" alt="Publicidade" />
    </aside>
  )
}
