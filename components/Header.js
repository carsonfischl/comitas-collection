import headerStyles from '../styles/Header.module.css'
import { Button } from '@nextui-org/react';
import { handleClientScriptLoad } from 'next/script';

const Header = ( {header} ) => {
  const text = JSON.parse(header);
  return (
    <div>
      <h1 className={headerStyles.title}>
          {text.title}
      </h1>
      <h3 className={headerStyles.subtitle}>{text.body}</h3>
    </div>
  )
}

export default Header