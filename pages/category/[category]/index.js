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
  //console.log(result)
  return {
    props: {
      result,
    },
  }
}

export const getStaticPaths = async () => {
  const categories = ['roman', 'earlymodern', 'medieval', 'hellenistic']

  const paths = categories.map((c) => ({ params: { category: c } }))

  return {
    paths,
    fallback: false,
  }
}

export default category