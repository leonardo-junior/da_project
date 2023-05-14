import { roboto } from 'components/atoms/fonts/fonts'
import styles from './breadcrumbs.module.scss'
import Link from 'next/link'

export const Breadcrumbs = () => {
  return (
    <nav className={styles.container}>
      <Link href="/" aria-label="Direcionar página principal">
        <span className={roboto.className}>Início</span>
      </Link>

      <img src="/arrow-right.svg" alt="Ícone seta à direita" />

      <Link href="/" aria-label="Direcionar página política">
        <span className={roboto.className}>Política</span>
      </Link>
    </nav>
  )
}
