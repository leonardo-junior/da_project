import Link from 'next/link'
import styles from './socialMedias.module.scss'

export const SocialMedias = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <img src="/facebook.svg" />
      </Link>

      <Link href="/">
        <img src="/twitter.svg" />
      </Link>

      <Link href="/">
        <img src="/whatsapp.svg" />
      </Link>
    </div>
  )
}
