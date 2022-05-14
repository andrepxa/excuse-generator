import { useState } from 'react'
import ExcuseGenerator from './components/ExcuseGenerator'
import PersonSelect from './components/PersonSelect'
import { people } from '../src/helpers/constants'
import './App.css'

function App() {
  const [person, setPerson] = useState(Object.keys(people)[0])

  return (
    <div className="wrapper">
      <ExcuseGenerator person={person} />
      <PersonSelect person={person} onChangePerson={setPerson} />
    </div>
  )
}

export default App
