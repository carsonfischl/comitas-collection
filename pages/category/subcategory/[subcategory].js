import { server } from '../../../config'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Meta from '../../../components/Meta'
import { items } from '../../../data'
import ItemList from '../../../components/ItemList'

const subcategory = ({ result }) => {
    const router = useRouter()
    const category = router.query.category

  return (
    <>
      <div>
        <ItemList items={result}/>
      </div>
      <Link href='/' css={{color: '$black', paddingBottom: '1rem'}}>Go Back</Link>
    </>
  )
}

export const getStaticProps = async ({ params: { subcategory } }) => {
    const router = useRouter()
    const category = router.query.category
    const subcategory = router.query.subcategory
  const result = items.filter(items => items.subcategory === subcategory && items.category === category)
  return {
    props: {
      result,
    },
  }
}

export const getStaticPaths = async () => {

    const subcategories = Array.from(new Set(items.map(items => items.subcategory)))
    const paths = subcategories.map((subcategory) => ({params:{ category: String(subcategory)}}))
    return {  
      paths,
      fallback: false,
    }
  }


export default subcategory