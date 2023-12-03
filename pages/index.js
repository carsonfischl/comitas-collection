import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Layout.module.css'
import headerStyles from '../styles/Header.module.css'
import Header from '../components/Header'
import { server } from '../config'
import ItemList from '../components/ItemList'
import items from '../data'
import mainphoto from '../public/images/mainheader.jpeg'
import Meta from '../components/Meta'

const Home = ({result, header}) => {
  return (
    <>
      <Meta title='Comitas Collection' description='Home page' keywords='Comitas Collection'/>
      <div>
        <Header header={header}/>
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
  var header = {
    id: '1',
    title: 'Comitas Collection',
    category: 'None',
    subcategory: 'None',
    pic: '/images/mainheader.jpeg',
    body:
      'A Global Historiography Through Numismatics',
  }
  header = JSON.stringify(header)
  return {
    props: {
      result,
      header
    }
  }
}

export default Home