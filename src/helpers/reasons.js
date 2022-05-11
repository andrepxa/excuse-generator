import { getRandom } from './constants'

export const ERIC_EXCUSES = [
  'a minha desculpa agora eh que tem outro dev',
  'po terminei de montar a mesa hoje...',
  'to criando um bot pra slack 😔',
  'hoje tem prova do lider caraio...',
  'hoje eu tenho um date... 🥺'
]

export const GUMA_EXCUSES = ['bora marcar', 'tenho que vestir meu galo']

export const EXCUSES_BY_PERSON = (person) =>
  ({
    eric: ERIC_EXCUSES,
    guma: GUMA_EXCUSES
  }[person] || ERIC_EXCUSES)

const FIRST_PHRASE_EXCUSES = [
  'po terminei de montar',
  'to criando',
  'hoje tem',
  'tenho que vestir'
]

const SECOND_PHRASE_EXCUSES = [
  'um cavalo',
  'a final do bbb',
  'um date',
  'um galo',
  'a filha da vizinha'
]

const THIRD_PHRASE_EXCUSES = ['pprt', '🥺', '😔', '😁', '👀', '😏']

export const getRandomReason = (person) => {
  if (person === 'bagre-ensaboado') {
    const firstPhrase = getRandom(FIRST_PHRASE_EXCUSES)
    const secondPhrase = getRandom(SECOND_PHRASE_EXCUSES)
    const thirdPhrase =
      Math.random() > 0.6 ? '' : getRandom(THIRD_PHRASE_EXCUSES)

    return `${firstPhrase} ${secondPhrase} ${thirdPhrase}`
  }

  return getRandom(EXCUSES_BY_PERSON(person))
}
