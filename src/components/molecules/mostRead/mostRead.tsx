import { merriweather, roboto } from 'components/atoms/fonts/fonts'
import styles from './mostRead.module.scss'
import Link from 'next/link'

export const MostRead = () => {
  const mostRead = [
    {
      id: 1,
      date: '10:54 - 25/07/2019',
      rated: true,
      text: 'Mulher anuncia faxina em troca de refeição em BH e se surpreende com respostas',
      dateTime: '2019-07-25T10:54',
    },
    {
      id: 2,
      date: '10:54 - 25/07/2019',
      rated: false,
      text: "'Um dos mais perigosos', diz delegado sobre homem que atirou em família de PM",
      dateTime: '2019-07-25T10:54',
    },
    {
      id: 3,
      date: '10:54 - 25/07/2019',
      rated: false,
      text: 'Abastecimento de água será interrompido em BH no domingo; veja a lista dos bairros',
      dateTime: '2019-07-25T10:54',
    },
    {
      id: 4,
      date: '10:54 - 25/07/2019',
      rated: true,
      text: 'Morre herdeiro da construtora OAS que infartou durante audiência na Justiça',
      dateTime: '2019-07-25T10:54',
    },
    {
      id: 5,
      date: '10:54 - 25/07/2019',
      rated: false,
      text: 'Preso diz que deu acesso a dados hackeados ao editor do Intercept Brasil',
      dateTime: '2019-07-25T10:54',
    },
  ]

  return (
    <section className={styles.container}>
      <h2 className={merriweather.className}>MAIS LIDAS</h2>

      <ul>
        {mostRead.map((matter) => (
          <li key={matter.id} className={styles.item}>
            <Link href="/">
              <time dateTime={matter.dateTime} className={roboto.className}>
                {matter.date}
              </time>

              <p className={merriweather.className}>
                {matter.rated && <img src="/rated.svg" alt="ícone de coroa" />} {matter.text}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
