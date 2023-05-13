import { Newsletter } from 'components/molecules/newsletter/newsletter'
import styles from './news.module.scss'
import { Follow } from 'components/molecules/follow/follow'
import { Ad2 } from 'components/molecules/ads/ad2/ad2'
import { FeaturedNewsHeader } from 'components/molecules/featuredNewsHeader/featuredNewsHeader'
import { FeaturedNews } from 'components/molecules/featuredNews/featuredNews'
import { Article } from 'components/molecules/article/article'

export const News = () => {
  const news1 = {
    title: 'Repercussão',
    text: "Fãs, veículos de imprensa e responsáveis pela produção de Bacurau têm usado as redes sociais para comemorar a novidade. O anúncio inicia uma nova carreira para o longa pernambucano na corrida pelo Oscar este ano, já que ficou de fora da edição de 2020.\n\nNas redes sociais, o cineasta Kleber Mendonça Filho comemorou a visibilidade do filme. 'Eu fico feliz com Bacurau sendo visto no Brasil e no mundo, não importa aonde', escreveu. Em outra postagem, feita neste domingo (31/1), com foto da capa do jornal The New York Times, o diretor destacou o apoio da imprensa e crítica internacional.",
  }

  const news2 = {
    title: 'Corrida pelo Oscar',
    text: 'Essa é uma nova chance para o longa pernambucano, que ficou de fora da edição do ano passado da grande celebração do cinema mundial. Na ocasião, a Academia Brasileira de Cinema (ABC) indicou o filme A vida invisível, de Karim Aïnouz, como título para representar o país. Este ano, a ABC apoia a candidatura de Babenco: alguém tem que ouvir o coração e dizer: parou, de Bárbara Paz, documentário de arte sobre obra a vida do cineasta Hector Babenco. \n\nPor não estar sendo indicado por uma agência internacional, no caso a ABC, Bacurau está elegível para todas as categorias de filmes de ficção, como Melhor Filme, Direção, Atriz Coadjuvante, Ator Coadjuvante e Melhor Roteiro Original, exceto para a de Melhor Filme em Língua Estrangeira. A distribuidora americana Kino Lorber está à frente da campanha.',
  }

  return (
    <div className={styles.container}>
      <FeaturedNewsHeader />

      <FeaturedNews />

      <Article title={news1.title} text={news1.text} />

      <Ad2 />

      <Article title={news2.title} text={news2.text} />

      <Follow />

      <Newsletter />
    </div>
  )
}
