import { getRandom } from './getRandom'

const PROMISES = ['vou beber unicamente cerveja']

export const getRandomPromise = () => {
  return getRandom(PROMISES)
}
