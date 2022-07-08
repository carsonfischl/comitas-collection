import { server } from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'
import { items } from '../../../data'
import ItemList from '../../../components/ItemList'

const subcategory = ({ result }) => {
  return (
    <>
      <div>
        <ItemList items={result}/>
      </div>
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps = async ({ params: { subcategory } }) => {
  const result = items.filter(items => items.subcategory === subcategory)
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
  
  const categories = items.map((item) => item.subcategory)
  const paths = categories.map((subcategory) => ({ params: { subcategory: subcategory.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default subcategory