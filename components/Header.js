import headerStyles from '../styles/Header.module.css'
import Image from 'next/image'
import TypeWriter from './TypeWriter'
import { useState } from 'react'

const Header = ({ header }) => {
  const text = JSON.parse(header);
  const [titleDone, setTitleDone] = useState(false);

  return (
    <div style={{ width: '100%' }}>
      <h1 className={headerStyles.title} style={{ position: 'relative', margin: 0, paddingBottom: '0.2em' }}>
        <span style={{ visibility: 'hidden', display: 'block' }}>{text.title}</span>
        <span style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
          <TypeWriter text={text.title} speed={70} onComplete={() => setTitleDone(true)} />
        </span>
      </h1>
      <div style={{ position: 'relative', width: '100%', height: '400px', flexShrink: 0, overflow: 'hidden', marginBottom: '1.5rem' }}>
        <Image src={text.pic} alt='mainphoto' fill style={{ objectFit: 'cover' }} />
      </div>
      <h3 className={headerStyles.subtitle} style={{ position: 'relative', margin: 0 }}>
        {/* invisible spacer reserves the full text height so cards never shift */}
        <span style={{ visibility: 'hidden', display: 'block' }}>{text.body}</span>
        <span style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
          {titleDone && <TypeWriter text={text.body} speed={40} />}
        </span>
      </h3>
    </div>
  )
}

export default Header
