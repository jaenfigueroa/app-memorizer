import style from './style.module.css'
import Button from '../Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={style.header}>
      <Link to='/home'>
        <Button>Inicio</Button>
      </Link>
      <Link to='/admin'>
        <Button>Admin</Button>
      </Link>
    </header>
  )
}

export default Header
