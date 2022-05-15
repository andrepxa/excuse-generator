import { useEffect, useState } from 'react'
import PhraseGenerator from '../components/PhraseGenerator'
import PersonSelect from '../components/PersonSelect'
import { people } from '../helpers/constants'
import { getRandomExcuse } from '../helpers/excuses'

const ExcuseGenerator = () => {
  const [person, setPerson] = useState(Object.keys(people)[0])
  const [excuse, setExcuse] = useState('')

  const setRandomExcuse = () => setExcuse(getRandomExcuse(person))

  useEffect(() => {
    setRandomExcuse()
  }, [person])

  return (
    <>
      <PhraseGenerator
        title="Que desgurpa devo usar hoje?"
        phrase={excuse}
        onChangePhrase={setRandomExcuse}
      />
      <PersonSelect person={person} onChangePerson={setPerson} />
    </>
  )
}

export default ExcuseGenerator
