import './App.css'
import Widget from './components/Widget'
import People from '../src/helpers/people'
import PersonSelect from './components/PersonSelect'
import { useState } from 'react'

function App() {
  const [person, setPerson] = useState(Object.keys(People)[0])

  console.log({ person })
  return (
    <div className="wrapper">
      <Widget person={person} />
      <PersonSelect person={person} onChangePerson={setPerson} />
    </div>
  )
}

export default App
