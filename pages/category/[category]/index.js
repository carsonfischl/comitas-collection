import { server } from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'
import { items } from '../../../data'
import ItemList from '../../../components/ItemList'
import Item from '../../../components/Item'

const category = ({ result }) => {
  return (
    <>
      <div>
        <ItemList items={result}/>
      </div>
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps = async ({ params: { category } }) => {
  const result = items.filter(items => items.category === category)
  console.log(result)
  return {
    props: {
      result,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/items`)
  const items = await res.json()
  
  const paths = items.map(({ category, locale }) => ({ params: { category: category }, locale }))
  return {
      fallback: true,
      paths,
  }
}

export default category