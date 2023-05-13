import { Hamburger } from 'components/atoms/hamburger/hamburger'
import styles from './nav.module.scss'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const Nav = () => {
  return (
    <div className={styles.container}>
      <Hamburger />

      <img src="/logo-estado-de-minas.svg" className={styles.logo} />

      <div className={`${styles.signIt} ${roboto.className}`}>Assine</div>
    </div>
  )
}
