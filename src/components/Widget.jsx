import { useCallback, useEffect, useState } from 'react'
import { getRandomReason } from '../helpers/reasons'

const Widget = ({ person }) => {
  const [reason, setReason] = useState('')

  console.log('widget', { person })

  const onSpacePressOrClick = useCallback(
    ({ type, keyCode }) => {
      if (type === 'click' || keyCode === 32) {
        setReason(getRandomReason(person))
      }
    },
    [person]
  )

  useEffect(() => {
    document.addEventListener('keydown', onSpacePressOrClick)
    return () => document.removeEventListener('keydown', onSpacePressOrClick)
  })

  useEffect(() => {
    setReason(getRandomReason(person))
  }, [person])

  return (
    <div className="item">
      <h3 className="tagline">Que desgurpa devo usar hoje?</h3>
      <h2 id="text">{reason}</h2>
      <span id="reload" onClick={onSpacePressOrClick}>
        Hit <span className="space-btn">Space</span> or Click
      </span>
    </div>
  )
}

export default Widget
