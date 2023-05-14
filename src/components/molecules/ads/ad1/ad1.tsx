import { roboto } from 'components/atoms/fonts/fonts'
import styles from './ad1.module.scss'

export const Ad1 = () => {
  return (
    <ins className={styles.container} aria-label="Anúncio" role="complementary">
      <span className={roboto.className}>Publicidade</span>

      <img src="/ad1.svg" alt="Anúncio" aria-label="Anúncio de produto" />
    </ins>
  )
}
