import headerStyles from '../styles/Header.module.css'
import { Button } from '@nextui-org/react';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
          Comitas Collection
      </h1>
      <h3 className={headerStyles.subtitle}>A global historiography through numismatics</h3>
      <h3 className={headerStyles.contruction}>UNDER CONSTRUCTION</h3>
    </div>
  )
}

export default Header