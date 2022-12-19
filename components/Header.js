import { Button, Image } from '@nextui-org/react';
import { handleClientScriptLoad } from 'next/script';

const Header = ( {header} ) => {
  const text = JSON.parse(header);
  return (
    <div style={{ alignContent: 'center', justifyContent: 'center' }}>
      <h1>
          {text.title}
      </h1>
      <Image src={text.pic} alt='mainphoto' style={{ width: '100%', padding: '1rem' }} className="z-0"/>
      <h3>{text.body}</h3>
    </div>
  )
}

export default Header