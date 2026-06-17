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
      <div style={{ position: 'relative', width: '100%', height: '500px', flexShrink: 0, overflow: 'hidden', marginBottom: '1.5rem', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', borderRadius: '6px' }}>
        <Image src={text.pic} alt='mainphoto' fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.45) 100%)', pointerEvents: 'none' }} />
      </div>
      <h3 className={headerStyles.subtitle} style={{ position: 'relative', margin: 0 }}>
        <span style={{ visibility: 'hidden', display: 'block' }}>{text.body}</span>
        <span style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
          {titleDone && <TypeWriter text={text.body} speed={40} />}
        </span>
      </h3>
    </div>
  )
}

export default Header
