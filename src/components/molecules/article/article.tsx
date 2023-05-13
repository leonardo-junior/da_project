import { merriweather } from 'components/atoms/fonts/fonts'
import styles from './article.module.scss'

type ArticleProps = {
  title: string
  text: string
}

export const Article = ({ title, text }: ArticleProps) => {
  return (
    <div className={styles.container}>
      <h2 className={merriweather.className}>{title}</h2>

      <p className={merriweather.className}>{text}</p>
    </div>
  )
}
