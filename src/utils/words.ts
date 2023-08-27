import { Word } from '../types'
import randomId from './randomId'

export const getWordsFromLocalStorage = (): Word[] => {
  const words = localStorage.getItem('words')
  return words ? JSON.parse(words) : []
}

export const saveWordsToLocalStorage = (words: Word[]) => {
  localStorage.setItem('words', JSON.stringify(words))
}

export const addWord = ({ ...rest }: Omit<Word, 'id'>) => {
  const words = getWordsFromLocalStorage()

  const newItem: Word = { id: randomId(), ...rest }
  const updatedWords = [...words, newItem]

  saveWordsToLocalStorage(updatedWords)
}

export const deleteWord = ({ id }: Pick<Word, 'id'>) => {
  const words = getWordsFromLocalStorage()
  const othersWords = words.filter((word) => word.id !== id)

  saveWordsToLocalStorage(othersWords)
}

export const updateWord = ({ id, ...rest }: Word) => {
  const words = getWordsFromLocalStorage()

  const updatedWords = words.map((word) => {
    if (word.id !== id) {
      return word
    }

    return { ...word, ...rest }
  })

  saveWordsToLocalStorage(updatedWords)
}
