import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Layout.module.css'
import Header from '../components/Header'
import { server } from '../config'
import ItemList from '../components/ItemList'

export default function Home({items}) {
  return (
    <div className={homeStyles.container}>
      <Header/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/items`)
  const items = await res.json()

  return {
    props: {
      items,
    },
  }
}