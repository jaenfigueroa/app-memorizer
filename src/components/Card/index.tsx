import { useState } from 'react'
import { Word } from '../../types'
import style from './style.module.css'

type cardProps = {
  item: Word
}

const Card = ({ item }: cardProps) => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <div className={style.card} onClick={() => setVisible((current) => !current)}>
      <div>{visible ? item.english : item.spanish}</div>
    </div>
  )
}

export default Card
