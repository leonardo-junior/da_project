import { merriweather, robotoCondensed } from 'components/atoms/fonts/fonts'
import styles from './newsletter.module.scss'

export const Newsletter = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={robotoCondensed.className}>receba nossa newsletter</h3>

        <p className={merriweather.className}>Comece o dia com as notícias selecionadas pelo nosso editor</p>
      </div>

      <div className={`${styles.signIt} ${robotoCondensed.className}`}>
        <input className={robotoCondensed.className} type="text" placeholder="Digite seu e-mail" />

        <button className={robotoCondensed.className} type="button">
          Receber
        </button>
      </div>
    </div>
  )
}
