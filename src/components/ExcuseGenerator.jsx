import { useCallback, useEffect, useState } from 'react'
import { getRandomExcuse } from '../helpers/excuses'

const ExcuseGenerator = ({ person }) => {
  const [excuse, setExcuse] = useState('')

  const onSpacePressOrClick = useCallback(
    ({ type, keyCode }) => {
      if (type === 'click' || keyCode === 32) {
        setExcuse(getRandomExcuse(person))
      }
    },
    [person]
  )

  useEffect(() => {
    document.addEventListener('keydown', onSpacePressOrClick)
    return () => document.removeEventListener('keydown', onSpacePressOrClick)
  })

  useEffect(() => {
    setExcuse(getRandomExcuse(person))
  }, [person])

  return (
    <div className="item">
      <h3 className="tagline">Que desgurpa devo usar hoje?</h3>
      <h2 id="text">{excuse}</h2>
      <span id="reload" onClick={onSpacePressOrClick}>
        Hit <span className="space-btn">Space</span> or Click
      </span>
    </div>
  )
}

export default ExcuseGenerator
