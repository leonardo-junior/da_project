import { merriweather, roboto } from 'components/atoms/fonts/fonts'
import { SocialMedias } from '../socialMedias/socialMedias'
import styles from './featuredNews.module.scss'

export const FeaturedNews = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columnist}>
        <div className={styles.columnistInfo}>
          <h3 className={roboto.className}>Tamaki Ryushi</h3>

          <div className={styles.postDate}>
            <img src="/clock.svg" alt="Icone relógio" />
            <span className={roboto.className}>02/02/2021 08:22</span>
          </div>
        </div>

        <div className={styles.socialMedia}>
          <SocialMedias />

          <button className={roboto.className}>
            Siga no <img src="/google-news.svg" alt="Google news" />
          </button>
        </div>
      </div>

      <div className={styles.header}>
        <img src="/featuredNews.svg" alt="Bacurau image" />

        <div>
          <img src="/camera.svg" alt="Imagem câmera" />

          <div>
            <p className={roboto.className}>
              Após dois anos, longa voltou a ser elegível para concorrer ao Oscar 2021 e causou grande
              repercussão
            </p>

            <span>{'(foto: Divulgação)'}</span>
          </div>
        </div>
      </div>

      <div className={styles.audio}>
        <button>
          <img src="/play.svg" alt="Ícone iniciar som" />
        </button>

        <span className={roboto.className}>Ouça o artigo</span>

        <span className={roboto.className}>11 minutos</span>

        <img src="/sound.svg" alt="Ícone demonstração som" />
      </div>

      <div className={`${styles.article} ${merriweather.className}`}>
        <p>
          A notícia de que o filme Bacurau (2019), dirigido por Kleber Mendonça Filho e Juliano Dornelles,
          voltou a ser elegível para concorrer ao Oscar 2021 tem causado grande repercussão nas redes e na
          imprensa nacional e internacional. Na última sexta-feira (29/1), a distribuidora independente
          Vitrine Filmes anunciou que o filme está registrado no catálogo do Academy Screening Room. Essa é a
          plataforma de acesso exclusivo aos membros da Academia, responsáveis pela seletiva do prêmio. A
          lista final dos filmes selecionados será divulgada em 15 de fevereiro. O filme poderá concorrer às
          principais categorias, exceto Melhor Filme Estrangeiro.
        </p>
      </div>
    </div>
  )
}
