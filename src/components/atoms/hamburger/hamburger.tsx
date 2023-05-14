import { useUserContext } from 'contexts/userContext'
import styles from './hamburger.module.scss'
import { useState } from 'react'
import { roboto } from '../fonts/fonts'

export const Hamburger = () => {
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
    <div className={styles.container}>
      <button onClick={toggleModal}>
        <span />
        <span />
        <span />
      </button>

      {isModalOpen && (
        <div className={styles.menu} onClick={toggleColumnist}>
          <p className={roboto.className}>{user.isColumnist ? 'Sair' : 'Logar'}</p>
        </div>
      )}

      {isModalOpen && <div className={styles.overlay} onClick={() => setIsModalOpen(false)} />}
    </div>
  )
}
