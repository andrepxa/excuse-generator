import { getRandom } from './getRandom'

const PROMISES = [
  'vou beber unicamente cerveja',
  'ao meu eu do futuro que vai dar tudo certo',
  'vou fazer um role light hoje'
]

export const getRandomPromise = () => {
  return getRandom(PROMISES)
}
