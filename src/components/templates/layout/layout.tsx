import { Header } from 'components/organisms/header/header'

import styles from './layout.module.scss'
import { Breadcrumbs } from 'components/molecules/breadcrumbs/breadcrumbs'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Header />

      <Breadcrumbs />

      <main className={styles.main}>{children}</main>
    </div>
  )
}
