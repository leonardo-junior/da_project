import { roboto } from 'components/atoms/fonts/fonts'
import styles from './ad1.module.scss'

export const Ad1 = () => {
  return (
    <aside className={styles.container}>
      <span className={roboto.className}>Publicidade</span>

      <img src="/ad1.svg" alt="Publicidade" />
    </aside>
  )
}
