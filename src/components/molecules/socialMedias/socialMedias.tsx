import Link from 'next/link'
import styles from './socialMedias.module.scss'

export const SocialMedias = () => {
  return (
    <ul className={styles.container}>
      <li>
        <Link href="/" aria-label="Compartilhar no Facebook">
          <img src="/facebook.svg" alt="Imagem logo Facebook" />
        </Link>
      </li>

      <li>
        <Link href="/" aria-label="Compartilhar no Twitter">
          <img src="/twitter.svg" alt="Imagem logo Twitter" />
        </Link>
      </li>

      <li>
        <Link href="/" aria-label="Compartilhar no WhatsApp">
          <img src="/whatsapp.svg" alt="Imagem logo WhatsApp" />
        </Link>
      </li>
    </ul>
  )
}
