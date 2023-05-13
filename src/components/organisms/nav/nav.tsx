import { Hamburger } from 'components/atoms/hamburger/hamburger'
import { roboto } from 'components/atoms/fonts/fonts'

import styles from './nav.module.scss'

export const Nav = () => {
  return (
    <div className={styles.container}>
      <Hamburger />

      <img src="/logo-estado-de-minas.svg" alt="Logo jornal Estado de Minas" className={styles.logo} />

      <button className={`${styles.signIt} ${roboto.className}`}>Assine</button>
    </div>
  )
}
