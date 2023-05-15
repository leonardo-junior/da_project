import { merriweather, roboto } from 'components/atoms/fonts/fonts'
import { SocialMedias } from '../socialMedias/socialMedias'
import styles from './featuredNews.module.scss'
import { useUserContext } from 'contexts/userContext'

export const FeaturedNews = () => {
  const { user } = useUserContext()

  return (
    <section className={styles.container}>
      <section className={styles.columnist}>
        <section className={styles.columnistInfo}>
          {user.isColumnist && (
            <img
              className={styles.columnistImage}
              src="https://i.imgur.com/oaiI5fm.png"
              alt="Foto do colunista"
            />
          )}

          <div>
            {user.isColumnist ? (
              <div className={styles.columnistMode}>
                <span className={roboto.className}>Colunista</span>

                <address className={roboto.className}>Tamaki Ryushi</address>
              </div>
            ) : (
              <address className={roboto.className}>Tamaki Ryushi</address>
            )}

            <div className={styles.postDate}>
              <img src="/clock.svg" alt="Icone relógio" />

              <time dateTime="2021-02-02T08:22" className={roboto.className}>
                02/02/2021 08:22
              </time>
            </div>
          </div>
        </section>

        <aside className={styles.socialMedia}>
          <div>
            <span className={roboto.className}>Compartilhe</span>

            <SocialMedias />
          </div>

          <button title="Direcionar integração com Google News" className={roboto.className}>
            Siga no <img src="/google-news.svg" alt="Google news" />
          </button>
        </aside>
      </section>

      <figure className={styles.header}>
        <img src="https://i.imgur.com/NLadKFQ.png" alt="Imagem do filme Bacurau" />

        <figcaption>
          <img src="/camera.svg" alt="Imagem câmera" />

          <div>
            <p className={roboto.className}>
              Após dois anos, longa voltou a ser elegível para concorrer ao Oscar 2021 e causou grande
              repercussão
            </p>

            <small className={roboto.className}>{'(foto: Divulgação)'}</small>
          </div>
        </figcaption>
      </figure>

      <section className={styles.audio}>
        <button title="Iniciar áudio">
          <img src="/play.svg" alt="Ícone iniciar som" />
        </button>

        <span className={roboto.className}>Ouça o artigo</span>

        <span className={roboto.className}>11 minutos</span>

        <img src="/sound.svg" alt="Ícone demonstração som" />
      </section>

      <article className={`${styles.article} ${merriweather.className}`}>
        <p>
          A notícia de que o filme Bacurau (2019), dirigido por Kleber Mendonça Filho e Juliano Dornelles,
          voltou a ser elegível para concorrer ao Oscar 2021 tem causado grande repercussão nas redes e na
          imprensa nacional e internacional. Na última sexta-feira (29/1), a distribuidora independente
          Vitrine Filmes anunciou que o filme está registrado no catálogo do Academy Screening Room. Essa é a
          plataforma de acesso exclusivo aos membros da Academia, responsáveis pela seletiva do prêmio. A
          lista final dos filmes selecionados será divulgada em 15 de fevereiro. O filme poderá concorrer às
          principais categorias, exceto Melhor Filme Estrangeiro.
        </p>
      </article>
    </section>
  )
}
