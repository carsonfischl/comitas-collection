import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Layout.module.css'
import headerStyles from '../styles/Header.module.css'
import Header from '../components/Header'
import { server } from '../config'
import ItemList from '../components/ItemList'
import items from '../data.js'
import mainphoto from '../public/images/mainheader.jpeg'

export default function Home({items, main}) {
  return (
    <div className={homeStyles.container}>
      <h1 className={headerStyles.title}>Comitas Collection</h1>
      <Image src={mainphoto} alt='mainphoto' style={{ width: '80%', borderRadius: '10%', padding: '1rem' }} />
      <h3 className={headerStyles.subtitle}>A Global Historiography through Numismatics</h3>
    </div>
  )
}
