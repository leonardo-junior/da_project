import { roboto } from 'components/atoms/fonts/fonts'
import styles from './breadcrumbs.module.scss'

export const Breadcrumbs = () => {
  return (
    <div className={styles.container}>
      <span className={roboto.className}>Início</span>

      <img src="/arrow-right.svg" alt="Ícone seta à direita" />

      <span className={roboto.className}>Política</span>
    </div>
  )
}
