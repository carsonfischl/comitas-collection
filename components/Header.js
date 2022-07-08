import headerStyles from '../styles/Header.module.css'
import { Button } from '@nextui-org/react';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
          Stuff
      </h1>
    </div>
  )
}

export default Header