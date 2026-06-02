import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Layout.module.css'
import headerStyles from '../styles/Header.module.css'
import Header from '../components/Header'
import ItemList from '../components/ItemList'
import { items } from '../data'
import mainphoto from '../public/images/out.png'
import Meta from '../components/Meta'

const Home = ({result, header}) => {
  return (
    <>
      <Meta title='The Comitas Collection' description='Home page' keywords='Comitas Collection'/>
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
  const result = items
  var header = {
    id: '1',
    title: 'The Comitas Collection',
    category: 'None',
    subcategory: 'None',
    pic: '/images/out.png',
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