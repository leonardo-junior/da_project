import { roboto } from 'components/atoms/fonts/fonts'
import styles from './ad5.module.scss'

export const Ad5 = () => {
  return (
    <aside className={styles.container}>
      <span className={roboto.className}>Publicidade</span>

      <img src="/ad5.svg" alt="Publicidade" />
    </aside>
  )
}
