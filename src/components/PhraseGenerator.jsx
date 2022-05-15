import { useEffect } from 'react'

const PhraseGenerator = ({ title, phrase, onChangePhrase }) => {
  const onSpacePressOrClick = ({ type, keyCode }) => {
    if (type === 'click' || keyCode === 32) {
      onChangePhrase()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onSpacePressOrClick)
    return () => document.removeEventListener('keydown', onSpacePressOrClick)
  })

  return (
    <>
      <div className="item">
        <h3 className="tagline">{title}</h3>
        <h2 id="text">{phrase}</h2>
        <span id="reload" onClick={onSpacePressOrClick}>
          Hit <span className="space-btn">Space</span> or Click
        </span>
      </div>
    </>
  )
}

export default PhraseGenerator
