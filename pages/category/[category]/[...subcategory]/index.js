import { server } from '../../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../../components/Meta'
import { items } from '../../../../data'
import ItemList from '../../../../components/ItemList'

const subcategory = ({ result }) => {
  return (
    <>
      <div>
        <ItemList items={result}/>
      </div>
      <Link href='/' css={{color: '$black', paddingBottom: '1rem'}}>Go Back</Link>
    </>
  )
}

export const getStaticProps = async ({ params: { category, subcategory } }) => {
  const result = items.filter(items => items.subcategory === subcategory && items.category === category)
  //console.log(result)
  return {
    props: {
      result,
    },
  }
}

export const getStaticPaths = async () => {
  const categories = ['roman', 'earlymodern', 'medieval', 'hellenistic']
  const subcategories = ['argead', 'antigonid','bactrian', 'seleucid', 'pergamon', 'thrace', 'ptolemaic', 'greek', 'imperial', 'imperatorial', 'republican', 'byzantine', 'french', 'german', 'spanish', 'dutch', 'english']
  const paths = subcategories.map((s) => ({ params: { category: categories[0], subcategory: subcategories } }))
  
  return {
    paths,
    fallback: false,
  }
}

export default subcategory