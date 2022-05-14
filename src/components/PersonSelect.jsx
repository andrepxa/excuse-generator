import { people } from '../helpers/constants'

const PersonSelect = ({ onChangePerson, person }) => (
  <>
    <ul className="footer-list">
      <li>
        Excuses of:{' '}
        <select
          value={person}
          onChange={({ target }) => onChangePerson(target.value)}
        >
          {Object.entries(people).map((person, index) => {
            return (
              <option value={person[0]} key={index}>
                {person[1]}
              </option>
            )
          })}
        </select>
      </li>
    </ul>
  </>
)

export default PersonSelect
