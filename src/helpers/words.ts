import randomId from '../utils/randomId'
import { Word } from '../types'
import { getWordsFromLocalStorage, saveWordsToLocalStorage } from '../config/localstorage'

export const getWords: () => Word[] = getWordsFromLocalStorage
export const saveWords: (words: Word[]) => void = saveWordsToLocalStorage

export const addWord = ({ ...rest }: Omit<Word, 'id'>) => {
  const words = getWords()

  const newItem: Word = { id: randomId(), ...rest }
  const updatedWords = [...words, newItem]

  saveWords(updatedWords)
}

export const deleteWord = ({ id }: Pick<Word, 'id'>) => {
  const words = getWords()
  const othersWords = words.filter((word) => word.id !== id)

  saveWords(othersWords)
}

export const updateWord = ({ id, ...rest }: Word) => {
  const words = getWords()

  const updatedWords = words.map((word) => {
    if (word.id !== id) {
      return word
    }

    return { ...word, ...rest }
  })

  saveWords(updatedWords)
}
