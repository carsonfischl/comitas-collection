import headerStyles from '../styles/Header.module.css'
import Image from 'next/image'

const Header = ({ header }) => {
  const text = JSON.parse(header);
  return (
    <div style={{ alignContent: 'center', justifyContent: 'center' }}>
      <h1 className={headerStyles.title}>{text.title}</h1>
      <div style={{ position: 'relative', width: '100%', height: '400px' }}>
        <Image src={text.pic} alt='mainphoto' fill style={{ objectFit: 'cover', padding: '1rem' }} />
      </div>
      <h3 className={headerStyles.subtitle}>{text.body}</h3>
    </div>
  )
}

export default Header
