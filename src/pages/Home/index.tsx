import style from './style.module.css'
import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import { Word } from '../../types'
import { randomNumber } from '../../utils/randomNumber'
import { getWords } from '../../helpers/words'
import Button from '../../components/Button'

const Home = () => {
  const [words, setWords] = useState<Word[]>([])
  const [word, setWord] = useState<Word>()

  const getRandomWord = () => {
    const number = randomNumber(words.length)
    setWord(words[randomNumber(number)])
  }

  useEffect(() => {
    setWords(getWords)
  }, [])

  return (
    <div className={`main ${style.home}`}>
      <section className={style.screen}>
        {word ? <Card item={word} /> : <p>No hay palabras</p>}
      </section>
      <Button onClick={getRandomWord}>Cambiar palabra</Button>
    </div>
  )
}

export default Home
