/* eslint-disable react/no-unescaped-entities */
import { merriweather, roboto } from 'components/atoms/fonts/fonts'
import styles from './featuredNewsHeader.module.scss'
import { Ad1 } from '../ads/ad1/ad1'

export const FeaturedNewsHeader = () => {
  return (
    <section className={styles.container}>
      <nav>
        <Ad1 />
      </nav>

      <span className={roboto.className}>Oscar 2021</span>

      <h1 className={merriweather.className}>
        Repercussão: 'Bacurau' recebe apoio em nova chance de indicação ao Oscar
      </h1>

      <p className={roboto.className}>
        Após dois anos, longa voltou a ser elegível para concorrer ao Oscar 2021 e causou grande repercussão
        nas redes e na imprensa nacional e internacional
      </p>
    </section>
  )
}
