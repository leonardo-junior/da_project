import { Footer } from 'components/organisms/footer/footer'
import { Nav } from 'components/organisms/nav/nav'

import styles from './layout.module.scss'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Nav />

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  )
}
