import { server } from '../../../config'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Meta from '../../../components/Meta'
import { items } from '../../../data'
import ItemList from '../../../components/ItemList'

const subcategory = ({ result }) => {

  const router = useRouter()
  const { category, subcategory } = router.query

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
  const result = items.filter(items => items.subcategory === subcategory)
  return {
    props: {
      result,
    },
  }
}

export const getStaticPaths = async () => {
  const subcategories = ['argead', 'antigonid','bactrian', 'seleucid', 'pergamon', 'thrace', 'ptolemaic', 'greek']
  const paths = subcategories.map((s) => ({ params: {subcategory: s } }))
  
  return {
    paths,
    fallback: false,
  }
}

export default subcategory