import { Menu } from 'components/atoms/menu/menu'
import { roboto } from 'components/atoms/fonts/fonts'

import styles from './nav.module.scss'

export const Nav = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.content}>
        <Menu />

        <div className={styles.info}>
          <button className={styles.search}>
            <img src="/search.svg" alt="Imagem lupa" />
          </button>

          <img src="/logo-estado-de-minas.svg" alt="Logo jornal Estado de Minas" className={styles.logo} />

          <p className={roboto.className}>Política</p>
        </div>

        <div className={styles.signIt}>
          <button className={styles.whatsButton}>
            <img src="/whatsapp-logo.svg" alt="Imagem WhatsApp" />
          </button>

          <button className={`${roboto.className} ${styles.signItButton}`}>Assine</button>

          <span />

          <img src="user-image.svg" alt="Imagem de perfil" />
        </div>
      </nav>
    </div>
  )
}
