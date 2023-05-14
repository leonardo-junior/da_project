import styles from './ad2.module.scss'

export const Ad2 = () => {
  return (
    <ins className={styles.container} aria-label="Anúncio" role="complementary">
      <img src="/ad2.svg" alt="Anúncio" aria-label="Anúncio de produto" />

      <img src="/ad6.svg" alt="Anúncio" aria-label="Anúncio de produto" />
    </ins>
  )
}
