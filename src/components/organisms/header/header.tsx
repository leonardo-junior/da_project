import { Menu } from 'components/atoms/menu/menu'
import { roboto } from 'components/atoms/fonts/fonts'

import styles from './header.module.scss'

export const Header = () => {
  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Menu />

        <section className={styles.info}>
          <form
            className={styles.search}
            onSubmit={(event) => handleSearch(event)}
            aria-label="Pesquisa de páginas"
          >
            <img src="/search.svg" alt="Imagem lupa de pesquisa" />
          </form>

          <img src="/logo-estado-de-minas.svg" alt="Logo jornal Estado de Minas" className={styles.logo} />

          <span className={roboto.className}>Política</span>
        </section>

        <section className={styles.signIt}>
          <button title="Direcionar ao WhatsApp" className={styles.whatsButton}>
            <img src="/whatsapp-logo.svg" alt="Imagem WhatsApp" />
          </button>

          <button
            className={`${roboto.className} ${styles.signItButton}`}
            aria-label="Direcionar área de assinatura"
          >
            Assine
          </button>

          <span />

          <img src="user-image.svg" alt="Imagem de perfil do usuário" />
        </section>
      </div>
    </header>
  )
}
