import { server } from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'
import Image from 'next/image'

const item = ({ item }) => {

  return (
    <>
      <Meta title={item.title} description={item.excerpt} />
      <Image src={item.pic}/>
      <h1>{item.title}</h1>
      <p>{item.body}</p>
      <br />
      <Link href='/' css={{color: '$black'}}>Go Back</Link>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/items/${context.params.id}`)
  const item = await res.json()

  return {
    props: {
      item,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/items`)
  const items = await res.json()

  const ids = items.map((item) => item.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default item