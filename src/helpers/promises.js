import { getRandom } from './getRandom'

const PROMISES = [
  'vou beber unicamente cerveja',
  'ao meu eu do futuro que vai dar tudo certo'
]

export const getRandomPromise = () => {
  return getRandom(PROMISES)
}
