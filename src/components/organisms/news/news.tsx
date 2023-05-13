import { Newsletter } from 'components/molecules/newsletter/newsletter'
import styles from './news.module.scss'
import { Follow } from 'components/molecules/follow/follow'
import { Ad2 } from 'components/molecules/ads/ad2/ad2'
import { FeaturedNewsHeader } from 'components/molecules/featuredNewsHeader/featuredNewsHeader'
import { FeaturedNews } from 'components/molecules/featuredNews/featuredNews'

export const News = () => {
  return (
    <div className={styles.container}>
      <FeaturedNewsHeader />

      <FeaturedNews />

      <div>Newsletter</div>

      <Ad2 />

      <Follow />

      <Newsletter />
    </div>
  )
}
