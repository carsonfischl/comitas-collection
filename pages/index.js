import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Layout.module.css'
import headerStyles from '../styles/Header.module.css'
import Header from '../components/Header'
import { server } from '../config'
import ItemList from '../components/ItemList'
import items from '../data'
import mainphoto from '../public/images/mainheader.jpeg'

const Home = ({result, main}) => {
  return (
    <>
      <div className={homeStyles.container}>
        <h1 className={headerStyles.title}>Comitas Collection</h1>
        <Image src={mainphoto} alt='mainphoto' style={{ width: '80%', padding: '1rem' }} />
        <h3 className={headerStyles.subtitle}>A Global Historiography through Numismatics</h3>
      </div>
      <div>
        <ItemList items={result}/>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/items`)
  const result = await res.json()

  return {
    props: {
      result,
    },
  }
}

export default Home