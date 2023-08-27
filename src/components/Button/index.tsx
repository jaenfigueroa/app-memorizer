import { PropsWithChildren } from 'react'
import style from './style.module.css'

type ButtonProps = {
  onClick?: () => void
}

const Button = ({ children, onClick }: PropsWithChildren<ButtonProps>) => {
  return (
    <button onClick={onClick} className={style.button}>
      {children}
    </button>
  )
}

export default Button
