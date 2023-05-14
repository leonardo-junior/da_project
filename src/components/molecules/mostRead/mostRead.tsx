import { merriweather, roboto } from 'components/atoms/fonts/fonts'
import styles from './mostRead.module.scss'

export const MostRead = () => {
  const mostRead = [
    {
      id: 1,
      date: '10:54 - 25/07/2019',
      rated: true,
      text: 'Mulher anuncia faxina em troca de refeição em BH e se surpreende com respostas',
    },
    {
      id: 2,
      date: '10:54 - 25/07/2019',
      rated: false,
      text: "'Um dos mais perigosos', diz delegado sobre homem que atirou em família de PM",
    },
    {
      id: 3,
      date: '10:54 - 25/07/2019',
      rated: false,
      text: 'Abastecimento de água será interrompido em BH no domingo; veja a lista dos bairros',
    },
    {
      id: 4,
      date: '10:54 - 25/07/2019',
      rated: true,
      text: 'Morre herdeiro da construtora OAS que infartou durante audiência na Justiça',
    },
    {
      id: 5,
      date: '10:54 - 25/07/2019',
      rated: false,
      text: 'Preso diz que deu acesso a dados hackeados ao editor do Intercept Brasil',
    },
  ]

  return (
    <div className={styles.container}>
      <h2 className={merriweather.className}>MAIS LIDAS</h2>

      <div>
        {mostRead.map((item) => (
          <div key={item.id} className={styles.item}>
            <span className={roboto.className}>{item.date}</span>

            <article>
              <p className={merriweather.className}>
                {item.rated && <img src="/rated.svg" alt="ícone de coroa" />} {item.text}
              </p>
            </article>
          </div>
        ))}
      </div>
    </div>
  )
}
