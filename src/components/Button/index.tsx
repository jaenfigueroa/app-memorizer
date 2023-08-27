import style from './style.module.css'

type Props = {
  text: string
  onClick: () => void
}

const Button = ({ text, onClick }: Props) => {
  return (
    <button onClick={onClick} className={style.button}>
      {text}
    </button>
  )
}

export default Button
