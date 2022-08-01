import { server } from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'
import { items } from '../../../data'
import { headers } from '../../../headers'
import ItemList from '../../../components/ItemList'
import Header from '../../../components/Header'
import Item from '../../../components/Item'

const category = ({ result, header }) => {
  return (
    <>
      <div>
        <Header header={header}/>
      </div>
      <div>
        <ItemList items={result}/>
      </div>
      <Link href='/' css={{color: '$black'}}>Go Back</Link>
    </>
  )
}

export const getStaticProps = async ({ params: { category } }) => {
  const result = items.filter(items => items.category === category)
  const single = headers.filter(headers => headers.category === category)
  const header = JSON.stringify(single[0])
  return {
    props: {
      result,
      header,
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