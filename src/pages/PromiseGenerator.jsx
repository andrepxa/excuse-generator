import { useEffect, useState } from 'react'
import PhraseGenerator from '../components/PhraseGenerator'
import { getRandomPromise } from '../helpers/promises'

const PromiseGenerator = () => {
  const [promise, setPromise] = useState('')

  const setRandomPromise = () => setPromise(getRandomPromise())

  useEffect(() => {
    setRandomPromise()
  }, [])

  return (
    <PhraseGenerator
      title="Que promesa devo fazer hoje?"
      phrase={promise}
      onChangePhrase={setRandomPromise}
    />
  )
}

export default PromiseGenerator
