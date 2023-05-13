import { Merriweather, Roboto, Roboto_Condensed } from 'next/font/google'

export const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
})

export const robotoCondensed = Roboto_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
})
