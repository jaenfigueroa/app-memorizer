import { Word } from '../types'

export const getWordsFromLocalStorage = (): Word[] => {
  const words = localStorage.getItem('words')
  return words ? JSON.parse(words) : []
}

export const saveWordsToLocalStorage = (words: Word[]) => {
  localStorage.setItem('words', JSON.stringify(words))
}
