import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Layout.module.css'
import Header from '../components/Header'
import { server } from '../config'
import ItemList from '../components/ItemList'
import items from '../data.js'

export default function Home({items}) {
  return (
    <div className={homeStyles.container}>
      <Header/>
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = items.json;

//   return {
//     props: {
//       res,
//     },
//   }
// }