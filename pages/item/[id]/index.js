import { server } from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'
import Image from 'next/image'
import { Card, Grid, Text } from "@nextui-org/react";
import { items } from '../../../data'

const item = ({ result }) => {

  return (
    <>
      <Meta title={result.title} description={result.excerpt} />
      <Card css={{alignItems:'center', padding:'1rem'}}>
        <Card.Image src={result.pic} alt={result.id} layout='fill'/>
        <Card.Body>
        <h1>{result.title}</h1>
        <p>{result.body}</p>
        </Card.Body>
      </Card>
      <br />
      <Link href='/' css={{color: '$black'}}>Go Back</Link>
    </>
  )
}

export const getStaticProps = async ({ params: { id } }) => {
  const single = items.filter(items => items.id === id)
  console.log(single)
  const result = single[0]
  console.log(result)
  return {
    props: {
      result,
    },
  }
}

function* range(start, end, step) {
  while (start < end) {
    yield start;
    start += step;
  }
}

export const getStaticPaths = async () => {
  const ids = Array.from(range(1,41,1))
  const paths = ids.map((i) => ({params:{ id: String(i)}}))
  return {
    paths,
    fallback: false,
  }
}

export default item