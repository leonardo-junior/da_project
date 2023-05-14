import styles from './ad4.module.scss'

export const Ad4 = () => {
  return (
    <ins className={styles.container} aria-label="Anúncio" role="complementary">
      <img src="/ad4.svg" alt="Anúncio" aria-label="Anúncio de produto" />
    </ins>
  )
}
