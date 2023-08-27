import style from './style.module.css'

type Props = {
  text: string
}

const Card = ({ text }: Props) => {
  return <div className={style.card}>{text}</div>
}

export default Card
