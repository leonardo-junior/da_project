import { merriweather, robotoCondensed } from 'components/atoms/fonts/fonts'
import styles from './newsletter.module.scss'

export const Newsletter = () => {
  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <section className={styles.container}>
      <header>
        <h2 className={robotoCondensed.className}>receba nossa newsletter</h2>

        <p className={merriweather.className}>Comece o dia com as notícias selecionadas pelo nosso editor</p>
      </header>

      <form
        onSubmit={(event) => handleSearch(event)}
        className={`${styles.signIt} ${robotoCondensed.className}`}
      >
        <input className={robotoCondensed.className} type="text" placeholder="Digite seu e-mail" />

        <button title="Adiciona e-mail ao newsletter" className={robotoCondensed.className} type="submit">
          Receber
        </button>
      </form>
    </section>
  )
}
