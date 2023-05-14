import { roboto } from 'components/atoms/fonts/fonts'
import styles from './ad5.module.scss'

export const Ad5 = () => {
  return (
    <ins className={styles.container} aria-label="Anúncio" role="complementary">
      <span className={roboto.className}>Publicidade</span>

      <img src="/ad5.svg" alt="Anúncio" aria-label="Anúncio de produto" />
    </ins>
  )
}
