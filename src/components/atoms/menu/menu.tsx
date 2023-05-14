import { useUserContext } from 'contexts/userContext'
import styles from './menu.module.scss'
import { useState } from 'react'
import { roboto } from '../fonts/fonts'
import Link from 'next/link'

export const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { user, setUser } = useUserContext()

  function toggleColumnist() {
    setUser((prev) => ({
      isColumnist: !prev.isColumnist,
    }))

    toggleModal()
  }

  function toggleModal() {
    setIsModalOpen((prev) => !prev)
  }

  return (
    <section className={styles.container}>
      <button title="Abrir/ fechar menu" onClick={toggleModal}>
        <div>
          <span />
          <span />
          <span />
        </div>

        <span className={roboto.className}>Seções</span>
      </button>

      {isModalOpen && (
        <nav className={styles.menu}>
          <Link
            href="/"
            className={roboto.className}
            onClick={toggleModal}
            aria-label="Direcionar página principal"
          >
            Home
          </Link>

          <Link
            href="/"
            className={roboto.className}
            onClick={toggleModal}
            aria-label="Direcionar página de notícias"
          >
            Notícias
          </Link>

          <p className={roboto.className} onClick={toggleColumnist}>
            {user.isColumnist ? 'Sair' : 'Logar'}
          </p>
        </nav>
      )}

      {isModalOpen && <div className={styles.overlay} onClick={() => setIsModalOpen(false)} />}
    </section>
  )
}
