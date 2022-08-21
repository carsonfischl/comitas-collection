import { server } from '../../../../config'
import { useRouter } from 'next/router'
import Link from 'next/link'
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
  return {
    props: {
      result,
    },
  }
}

export const getStaticPaths = async ( ) => {
    const categories = Array.from(new Set(items.map(items => items.category)))
    const subcategories = Array.from(new Set(items.map(items => items.subcategory)))
    const pathObj = categories.map((category) => subcategories.map((subcategory) => ({params:{ category: String(category), subcategory: String(subcategory)}})))

    return {  
      paths: [...pathObj[0]],
      fallback: false,
    }
  }


export default subcategory